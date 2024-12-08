import './popularCourses.css';
import coursesData from '../../data/coursesData';
import Button from '../../Button/Button';
import CourseCard from '../../CourseCard/CourseCard';

function PopularCourses({ changePage }) {

    const popularCourses = coursesData.slice(0, 4);

    return (
        <div className='popular-courses'>
            <h2 className='popular-courses-title'>Top rating courses</h2>

            {popularCourses.map(course => (
                <CourseCard
                    key={course.id}
                    {...course}
                >

                </CourseCard>
            ))}

            <a className="link-courses" href='./courses' aria-label="courses" onClick={changePage}  >
                view all
                <svg className='view-courses-svg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
            </a>
        </div>
    );
}
export default PopularCourses;