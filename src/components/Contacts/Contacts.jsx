import React from "react"
import { images } from "../../constants";

const Contacts = () => {
    return (
        <div className="header_content header_wrap section_padding" id="contact">
            <div className="header_wrapper-info">
                <h4 className="headtext-colapse">Contact.</h4>
                <h1 className="headtext_col" style={{ marginBottom: '3rem' }}>Find Us</h1>
                <div className="header_wrapper-content">
                    <p className="p_content">Sevent 21 street, Liver Lake, Souht-Mumbai</p>
                    <p className="p_content-main">Opening Hours</p>
                    <p className="p_content">Mon - Sat: 7:00 am to 11:00 pm</p>
                    <p className="p_content">Sun: 7:00 am to 12:00 pm</p>
                </div>
                <button className="used-button">Find Us</button>

            </div>

            <div className="header_wrap_img">
                <img src={images.fitness} alt="fitness" />
            </div>

        </div>
    )
}
export default Contacts;