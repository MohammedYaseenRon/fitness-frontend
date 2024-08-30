import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import { images } from '../../constants';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="app_navbar">
            <div className="app_navbar-logo">
                <img src={images.logo} alt="app logo" />
            </div>
            <ul className="app_navbar-links">
                <li className="app_navbar-content"><a href="#home">Home</a></li>
                <li className="app_navbar-content"><a href="#about">About</a></li>
                <li className="app_navbar-content"><a href="#services">Services</a></li>
                <li className="app_navbar-content"><a href="#workouts">Workouts</a></li>
                <li className="app_navbar-content"><a href="#contact">Contact</a></li> 
            </ul>
            <div className="app_navbar-signup">
                <button className="app_navbar-button">Signup</button>  
            </div>  

            <div className="app_navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                
                {toggleMenu && (
                    <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
                        <RxCross1 fontSize={27} className="overlay_close" onClick={()=>setToggleMenu(false)} />
                        <ul className="app_navbar-smallscreen_links">
                            <li className="app_navbar-content"><a href="#home">Home</a></li>
                            <li className="app_navbar-content"><a href="#about">About</a></li>
                            <li className="app_navbar-content"><a href="#services">Services</a></li>
                            <li className="app_navbar-content"><a href="#workouts">Workouts</a></li>
                            <li className="app_navbar-content"><a href="#contact">Contact</a></li> 
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
