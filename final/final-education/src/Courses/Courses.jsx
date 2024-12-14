import { useState, useEffect } from "react";
import './courses.css';
import CourseCard from "../CourseCard/CourseCard";
import coursesData from "../data/coursesData";

function Courses() {

    const [filters, setFilters] = useState({ category: [], level: [] }); //filters
    const [sortOption, setSortOption] = useState(""); // sort option
    const [filteredCourses, setFilteredCourses] = useState(coursesData); // current courses list

    // update courses list
    const applyFiltersAndSort = (updatedFilters, updatedSortOption) => {
        let filteredData = [...coursesData];

        // category 
        if (updatedFilters.category.length > 0) {
            filteredData = filteredData.filter((course) =>
                updatedFilters.category.includes(course.category)
            );
        }

        // level filter
        if (updatedFilters.level.length > 0) {
            filteredData = filteredData.filter((course) =>
                updatedFilters.level.includes(course.level)
            );
        }

        // sort
        if (updatedSortOption === "rating") {
            filteredData.sort((a, b) => b.rating - a.rating);
        } else if (updatedSortOption === "duration") {
            filteredData.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        }

        setFilteredCourses(filteredData);
    };

    // handle sort option
    const handleSortChange = (option) => {
        setSortOption(option);
        applyFiltersAndSort(filters, option);
    };

    // handle filter list
    const handleFilterChange = (type, value) => {
        const updatedFilters = { ...filters };

        //remove exist filter
        if (updatedFilters[type].includes(value)) {

            updatedFilters[type] = updatedFilters[type].filter((item) => item !== value);
        } else {
            //add new filter
            updatedFilters[type].push(value);
        }

        setFilters(updatedFilters);
        applyFiltersAndSort(updatedFilters, sortOption);
    };

    return (
        <>
            <div className="filter">
                <h2 className="filter-title">Filter By</h2>
                <div className="filter-sort">
                    <label htmlFor="sort" className="select-sort">Sort:</label>
                    <select id="sort" onChange={(e) => handleSortChange(e.target.value)}>
                        <option value="">Default</option>
                        <option value="rating">Sort By Rating</option>
                        <option value="duration">Sort By Duration</option>
                    </select>
                </div>

                <div className="filter-categories">
                    <span className="filter-categories-title">Categories:</span>
                    {Array.from(new Set(coursesData.map(course => course.category))).map((category) => (
                        <div className="checbox-categories-container" key={category}>
                            <input
                                type="checkbox"
                                id={category}
                                value={category}
                                name="category"
                                checked={filters.category.includes(category)}
                                onChange={() => handleFilterChange("category", category)}
                            />
                            <label htmlFor={category} className="categories-sort">{category}</label>
                        </div>

                    ))}
                </div>
                <div className="filter-level">
                    <span className="filter-level-title">Level:</span>
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                        <div className="checkbox-level-container" key={level}>

                            <input
                                type="checkbox"
                                id={level}
                                value={level}
                                name="level"
                                checked={filters.level.includes(level)}
                                onChange={() => handleFilterChange("level", level)}
                            />
                            <label htmlFor={level} className="level-sort">
                                {level}
                            </label>
                        </div>


                    ))}
                </div>

            </div>
            <div className="courses">
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                ))}
            </div>
        </>
    );
}

export default Courses;
