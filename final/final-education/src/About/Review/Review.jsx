import './review.css';
function Review() {
    const reviews = [
        {
            name: "Patrick A.",
            title: "Web Developer",
            location: "Philippines",
            image: "./Patrick.jpg",
            feedback: "This platform helped me improve my skills as a developer. The hands-on projects are excellent! The structured lessons and real-world examples made learning enjoyable and efficient. I particularly appreciated the mentors' timely feedback and support.",
        },
        {
            name: "Jack D.",
            title: "Frontend Engineer",
            location: "USA",
            image: "./Jack.jpg",
            feedback: "I gained practical knowledge from interactive lessons and amazing projects. Highly recommend! The exercises pushed me to think critically, and the community forums provided an excellent support system. ",
        },
        {
            name: "Seon.M",
            title: "IMBA Graduate",
            location: "Korea",
            image: "./Seon.jpg",
            feedback: "The online courses allowed me to study from home while balancing work and studies effectively. The flexible schedule was perfect for someone with a busy lifestyle.",
        },
    ];
    return (

        <div className="review-container">
            <div className="review-header">
                <h2 className='review-container-title-larger'>Be a Part of Our Growing Community!</h2>
                <h2 className='review-container-title-small'>Join 100+ Learners with Access to 10+ Courses!</h2>
            </div>

            {reviews.map((item, index) => (
                <div className="review" key={index}>
                    <img src={item.image} alt={`${item.title} ${item.name}`} className="review-img" />
                    <div className="review-content">
                        <h3 className="review-title">{item.name}</h3>
                        <h4 className='job-title'>{item.title}</h4>
                        <h5 className='location'>{item.location}</h5>
                        <p className='review-feedback'>'{item.feedback}'</p>
                    </div>


                </div>
            ))}
        </div>
    );
}
export default Review;