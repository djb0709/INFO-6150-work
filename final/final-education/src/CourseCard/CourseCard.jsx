import './courseCard.css';
import Button from '../Button/Button';
import SubscribeDialog from '../SubscribeDialog/SubscribeDialog';
import { useState } from 'react';
function CourseCard({ id, title, category, rating, alt, level, duration, image, description }) {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSubscribe, setIsSubscribe] = useState(false);



    const handleSubscribe = () => {
        setIsDialogOpen(true);

    };
    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };
    const handleFormSubmit = () => {
        isSubscribe ?
            console.log("Unsubscribe success!") :
            console.log("subscribe success!")


    };
    return (

        <div className='course-card'>
            <img src={image} alt={alt} className='course-img' />
            <div className='content'>
                <div className="course-header">
                    <p className="course-category">{category}</p>
                    <p className="course-rating">
                        <svg className='star-svg' width='16px' height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>

                        {rating} / 5 (full 5 stars)

                    </p>
                </div>
                <h3 className="course-title">{title}</h3>
                <p className="course-description">{description}</p>
                <div className="course-details">
                    <p>Level: {level}</p>
                    <p>No More Than {duration}</p>
                </div>
                <Button className={!isSubscribe ? "subscribe-btn" : "unsubscribe-btn"} visual="link" a11yLabel='subscribe' onClick={handleSubscribe}>
                    {!isSubscribe ? "Subscribe" : "Unsubscribe"}
                </Button>
            </div>
            <SubscribeDialog
                id={id}
                open={isDialogOpen}
                onClose={handleDialogClose}
                onSubmit={handleFormSubmit}
                isSubscribe={isSubscribe}
                setIsSubscribe={setIsSubscribe}

            >

            </SubscribeDialog>

        </div>
    );
}
export default CourseCard;