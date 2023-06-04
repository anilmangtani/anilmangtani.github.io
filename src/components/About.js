import React from "react";
import '../css/about.css'
import aboutimg from '../images/aboutimg.jpg'
const About = () => {
    return (
        <div id="about">
            <div className="about-wrapper">
                <div className="about-left-section">

                    <div className="about-heading">
                        <h1>About me</h1>
                    </div>
                    <div className="about-left-image-bg"></div>
                    <div className="about-left-image">
                        <img src={aboutimg} alt="Anil's Image" srcSet="" />
                    </div>
                    


                </div>
                <div className="about-right-section">
                    <div className="about-content">
                        <p>Hello! I am a Software Developer, and I am passionate about creating Software application that can help others and my teammates to achieve their needs and goals. I love to learn more and more about the new technologies of this new world.
                        </p>
                        <p>
                        I am a team player and I have done Internships with experience of the full software development lifecycle with a focus on Agile processes.
                        </p>
                    </div>

                    <div className="about-section-button">
                        <div className="about-contact-button">
                            <a href="/#contact" className='contact-me'>Contact Me</a>
                        </div>
                        <div className="about-download-button">
                            <a href="/#skills" className='download-cv'>My Skills</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;