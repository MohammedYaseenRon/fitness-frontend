import React from "react";
import './Workout.css';

const Workout = () => {
    const handleMouseMove = (event) => {
        const card = event.currentTarget;
        const { clientX, clientY } = event;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;

        const moveX = (x - 0.5) * 30; 
        const moveY = (y - 0.5) * 30; 

        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        card.style.transform = 'translate(0, 0)';
    };

    return (
        <div className="workout-container about_bg section_padding" id="workouts">
            <div className="workout-content">
                <h1 className="header-content">Our Training Program</h1>
            </div>
            <div className="workout_card">
                {['Musclular', 'Power lift', 'Cardio', 'Strength Train', 'Fat loss', 'Diet Plan', 'Yoga', 'KickBoxing', 'Cross Fit', 'Full Body'].map((program, index) => (
                    <div 
                        key={index} 
                        className="workout_card-content"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h4 className="content-h4">{program}</h4>
                        <p className="p-para">Lorem ipsum dolor sit amet.</p>
                        <button className="workout-btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Workout;
