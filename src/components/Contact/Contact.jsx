import React from "react";
import './Contact.css';
import Header from './../Header/Header';
import FooterLink from './../FooterLink/FooterLink';
import contactvector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';

const Contact = () => {
    return (
        <div className="section-container">
            <Header heading="Get in touch"
                details="Interested to collaborate? Feel free to drop me and email" />

            <div className="contact-form-container">
                <form className="contact-form">
                    <input type="email" placeholder="Your Email ID" name="email" className="input-box email-input" />
                    <textarea placeholder="Your Message" name="message" className="input-box body-input"></textarea>
                    <button type="submit" className="contact-btn">Send Email</button>
                </form>
            </div>

            <div className="social-icons-container">
                <a href="https://github.com/VishalSalvankar" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://github.com/VishalSalvankar" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://instagram.com/VishalSalvankar" className="social-icon">
                    <img src={instagram} alt="social" />
                </a>
                <a href="https://github.com/VishalSalvankar" className="social-icon">
                    <img src={medium} alt="social" />
                </a>
                <a href="https://github.com/VishalSalvankar" className="social-icon">
                    <img src={web} alt="social" />
                </a>
            </div>
            <FooterLink phrase="Read more " link="about me" toAddress="/about" />
            <div className="vector-frame">
                <img className="about-vector" src={contactvector} alt="vector" />
            </div>
        </div>
    )
}

export default Contact;