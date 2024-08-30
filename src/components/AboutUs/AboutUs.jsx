import React, { useRef } from 'react'
import './AboutUs.css'
import { images } from '../../constants'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const aboutImages = [images.about1, images.about2, images.about3, images.about4];

const AboutUs = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 300;
        }
        else {
            current.scrollLeft += 300;
        }
    }

    return (
        <div className="about_content about_bg flex_center" id="about">
            <div className="about_content-aboutus">
                <h1 className="header-content">About Us</h1>
                <p className="p_content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, tenetur atque. Incidunt eius voluptatem sapiente.</p>
                <button className="used-button">Know More</button>
            </div>
  
            <div className="about_gallery-images flex_center">
                <div className="about_gallery-images_container" ref={scrollRef}>
                {aboutImages.map((image, index) => (
                    <div className='about_gallery_images_card flex_center' key={`gallery_images-${index+1}`}>
                        <img src={image} alt="about-gallery" />
                    </div>
                ))}
                </div>
        
                <div className="about_gallery_images-icons">
                    <FaArrowLeft className="gallery_arror-icon" onClick={()=> scroll('left')} />
                    <FaArrowRight className="gallery_arror-icon" onClick={()=> scroll('right')} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;