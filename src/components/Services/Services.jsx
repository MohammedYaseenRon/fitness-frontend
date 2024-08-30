import React from "react";
import './Services.css';
import { images } from "../../constants";

const Services = () =>{
    return (
        <div className="services_container" id="services">
            <div className="main_header">
                <h1 className="header-content">Our Services</h1>
            </div>  

            <div className="service_content">
                <div className="service_list">
                    <img src={images.personal} alt="personal" />
                    <h3 className="header_content-h3">Personal Training</h3>
                    <p className="p_content">Get one-on-one training with our expert trainers to achieve your fitness goals.</p>
                </div>
                <div className="service_list">
                    <img src={images.group} alt="group" />
                    <h3 className="header_content-h3">Group classes</h3>
                    <p className="p_content">Get one-on-one training with our expert trainers to achieve your fitness goals.</p>
                </div>
                <div className="service_list">
                    <img src={images.nutrition} alt="nutrition" />
                    <h3 className="header_content-h3">Nutrition Planning</h3>
                    <p className="p_content">Get one-on-one training with our expert trainers to achieve your fitness goals.</p>
                </div>
                <div className="service_list">
                    <img src={images.online} alt="online" />
                    <h3 className="header_content-h3">Online Coaching</h3>
                    <p className="p_content">Get one-on-one training with our expert trainers to achieve your fitness goals.</p>
                </div>
                
            </div>



        </div>
    )
}

export default Services;



