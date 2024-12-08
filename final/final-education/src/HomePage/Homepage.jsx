import Button from "../Button/Button";
import Carousel from "./Carousel/Carousel";
import carouselImages from "../data/carouselImages";
import './homepage.css';
import PopularCourses from "./PopularCourses/PopularCourses";
function HomePage({ changePage }) {


    return (
        <>
            <Carousel images={carouselImages}></Carousel>
            <PopularCourses changePage={changePage}></PopularCourses>
            <p>aaaa</p>
            <p>aaaa</p>
            <p>aaaa</p>
        </>
    );
}
export default HomePage;
