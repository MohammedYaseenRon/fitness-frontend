import React from "react";
import './Footer.css';      
import { images } from "../../constants";
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () =>{
    return (
        <div className="footer-content footer-bg section_padding">
            <div className="footer-content_main">
                <div className="footer-content_info">
                    <h1 className="footer-headtext">Contact Us</h1>
                    <p className="p_content">Sevent 21 street, Liver Lake, Souht-Mumbai</p>
                    <p className="p_content">+91 0079780080</p>
                    <p className="p_content">+91 9800788786</p>
                </div>

                <div className="footer-content_logo">
                    <img src={images.logo} alt="footer-logo" />
                    <p className="p_content">Embark on a transformative journey to health and wellness.</p>
                    <div className="footer-content_icons">
                        <FiFacebook />
                        <FiInstagram />
                        <FiTwitter />

                    </div>
                </div>

                <div className="footer-content_work">
                    <h1 className="footer-headtext">Opening Hours</h1>
                    <p className="p_content">Mon - Sat: 7:00 am to 11:00 pm</p>
                    <p className="p_content">Sun: 7:00 am to 12:00 pm</p>
                </div>
            </div>
            <div className="footer_copyright">
                    <p className="p_content">2022 Fitness. All Rights Reserved.</p>
            </div>
            
        </div>
    )
}

export default Footer;