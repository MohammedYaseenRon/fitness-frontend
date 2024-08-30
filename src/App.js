import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Workout from "./components/Workouts/Workouts";
import Contacts from "./components/Contacts/Contacts"; 
import Footer from "./components/Footer/Footer";


const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Workout />
    <Contacts />
    <Footer />
  </div>
);

export default App;