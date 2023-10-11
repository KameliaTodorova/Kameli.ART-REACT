import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.jpg";
import "../styles/Home.css";

function Home() {
  return (
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">  
        <h1>Kameli.ART</h1>
        <p>Once upon a time, there was a little dreamer...</p>
        <Link to="/menu">
            <button className="glow-on-hover" type="button"> Browse Gallery </button>
        </Link>
    </div>
  </div>
  );
}

export default Home;