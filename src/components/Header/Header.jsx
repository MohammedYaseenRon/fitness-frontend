import React from 'react';
import {images} from '../../constants';

import './Header.css';

const Header = () => {
  return (
    <div className="header_content header_wrapper section_padding" id="home">
        <div className="header_wrapper-info">
            <h4 className="header_content-h4">Transform Your Life</h4>
            <h1 className="header_content-h1">Best Version of Yourself</h1>
            <p className="app_navbar-content">Embark on a transformative journey to health and wellness, where every step you take brings you closer to your goals.</p>
            <button type="button" className="used-button">Know More</button>
        </div>
        <div className="header_wrapper_img">
            <img src={images.header} alt="header img" />
        </div>

    </div>
  )
}

export default Header