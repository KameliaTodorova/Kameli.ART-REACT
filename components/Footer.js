import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href="https://www.facebook.com/profile.php?id=100078423722168" target="_blank"><FaFacebook /></a>
          <a href="https://www.instagram.com/kameli.art/" target="_blank"><FaInstagram /></a>
          <a href="https://twitter.com/ArtKameli" target="_blank"><FaTwitter /></a>
        </div>
        <p> &copy; 2023 Kameli.ART</p>
    </div>
  )
}

export default Footer;