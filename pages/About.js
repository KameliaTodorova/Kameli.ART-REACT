import React from "react";
import AboutCover from "../assets/about.JPG";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutCover})` }}>
      </div>
      <div className="aboutBottom">
        <h1>Kameli.ART</h1>
        <p>
        Kamelia's artwork is layered with symbolism, often provoking deep emotions.
        She expresses love, hope, authenticity, and beauty through her brushstrokes.
        Kamelia often finds inspiration from her dreams she has at night.
        Like Van Gogh once said, “I paint my dreams, and I dream my paintings,” she also lives by this.
        </p>
      </div>
    </div>
  );
}

export default About;