import { useState } from "react";
import './carousel.css';
import Button from "../Button/Button";
function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImg = () => {
        setCurrentIndex(
            (prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const nextImg = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % images.length
        );
    };
    const goToSpeImg = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`img-container ${index === currentIndex ? "active" : ""}`}
                >
                    <img src={image.larger} alt={image.alt} className="carousel-img" />

                    <div className="carousel-text">{image.text}</div>
                    <div className="dot-container">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? "active" : ""}`}
                                onClick={() => { goToSpeImg(index) }}
                            >
                            </span>
                        ))}
                    </div>
                </div>
            ))}
            <Button className='prev button-default' onClick={prevImg}>
                《
            </Button>
            <Button className='next button-default' onClick={nextImg}>
                》
            </Button>




        </div>
    );
}
export default Carousel;