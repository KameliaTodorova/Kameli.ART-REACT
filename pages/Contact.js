import React from 'react';
import Cover from "../assets/cover.JPG";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide"
        style={{ backgroundImage: `url(${Cover})` }}
        ></div>
        <div className="rightSide">
            <h1>Contact Me</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Your Name</label>
                <input name="name" placeholder="Enter your name..." type="text" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter your email..." type="email" />
                <label htmlFor="message">Message</label>
                <textarea
                    rows="7"
                    placeholder="Enter your message..."
                    name="message"
                    required
                >
                </textarea>
                <button className="glow-on-hover" type="button">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;