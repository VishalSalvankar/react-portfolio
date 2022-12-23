import React from "react";
import Header from "../Header/Header";
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import FooterLink from "../FooterLink/FooterLink";
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className="section-container">
            <Header
                heading="About Me"
                details="The Lean Programmer | Public Speaker | Youtuber | Blogger | Uplifting the student community in the field of tech and personal growth"
            />

            <div className="about-main">
                <div className="about-main-left">
                    <h3 className="about-sub-head">Teacher</h3>
                    <p className="about-details">
                        Teaching is my passion, till now, I've taught thousands of students about Programmig and Web development. Check out{' '}
                        <a className="about-link-element" href="https://www.google.com" target="_blank">my free react courses!</a>
                    </p>


                    <h3 className="about-sub-head">Blogger</h3>
                    <p className="about-details">
                        I have been writing blogs from around 3 years now, and became top-blogger on medium twice. Check out{' '}
                        <a className="about-link-element" href="https://www.google.com" target="_blank">my medium blogs today!</a>
                    </p>

                    <h3 className="about-sub-head">Public Speaker</h3>
                    <p className="about-details">
                        Being a passionate public speaker, I've given talks at more than 75 events till now! Want me to speak in your event?{' '}
                        <a className="about-link-element" href="mailto:vishalsalvankar@gmail.com" target="_blank">Email me the details!</a>
                    </p>
                </div>
                <div className="about-main-right">
                    <img src={aboutAnime} alt="about-anime" className="about-anime" />
                </div>
            </div>

            <FooterLink phrase="Check out my " link="projects!" toAddress="/projects" />
            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt="about" />
            </div>
        </div>
    )
}

export default About;