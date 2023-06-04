import React from "react";
import '../css/resume.css';

const Resume = () => {
    return (
        <div id="resume">
            <div className="resume-wrapper">
                <div className="resume-heading">
                    <h1>Resume</h1>
                    
                </div>
                <div className="resume-content">
                    <div className="resume-exp-edu-section">

                        <div className="resume-exp">
                            <div className="exp-heading">
                                <h1>WORK EXPERIENCE</h1>
                            </div>
                            <div className="exp-content">
                                <div className="exp-place-heading">
                                    <h1>actyv.ai </h1>
                                </div>
                                <div className="exp-place-content">
                                    <p><b>FullStack Software Developer Intern {"(Full Time)"}</b></p>
                                    <p>Jan 2023 - Jun 2023</p>
                                    <p>
                                        <ul>
                                            <li><b><span className="resume-info-heading">Project Development and Collaboration:</span></b><span className="resume-info"> Contributed to the development of the company’s product website using
                                                the MERN stack, resulting in a seamless and user-friendly online platform.</span></li>
                                            <li><b><span className="resume-info-heading">Backend Development and API Design:</span></b> <span className="resume-info">Developed robust backend APIs, improving data retrieval and enhancing
                                                overall performance, resulting in a 30% decrease in response time.</span></li>
                                            <li><b><span className="resume-info-heading">Bug Resolution:</span></b><span className="resume-info"> Actively participated in front-end tasks, identifying and resolving critical bugs, resulting in a 15%
                                                increase in user satisfaction and a more polished user interface</span></li>
                                        </ul>
                                    </p>
                                </div>
                                
                                <div className="exp-place-heading">
                                    <h1>Cuber Reality</h1>
                                </div>
                                <div className="exp-place-content">
                                        <p><b>Software Developer Intern {"(Full-time)"}</b></p>
                                        <p>May 2022 - July 2022</p>
                                        <p>
                                        <ul>
                                            <li><b><span className="resume-info-heading">Mobile Application Development with Flutter:</span></b><span className="resume-info">
                                                Led the end-to-end development of a mobile application using
                                                Flutter, ensuring cross-platform compatibility and taking charge of application architecture and UI design.
                                            </span></li>
                                            <li><b><span className="resume-info-heading"> Front-End Development and UI/UX Design:</span></b> <span className="resume-info">
                                                Achieved a 20% improvement in user retention by optimizing the UI
                                                design and enhancing the overall visual appeal of the application
                                            </span></li>
                                            <li><b><span className="resume-info-heading">Back-End Integration and API Implementation:</span></b><span className="resume-info">
                                                : Integrated the front-end with the back-end by implementing
                                                APIs, facilitating smooth data communication and ensuring seamless functionality
                                            </span></li>
                                        </ul> 
                                        </p>    
                                </div>
                            </div>
                        </div>
                        <div className="resume-edu">
                        <div className="exp-heading">
                                <h1>EDUCATION</h1>
                            </div>
                            <div className="exp-content">
                                <div className="exp-place-heading">
                                    <h1>Dhirubhai Ambani Institute of  Information and Communication Technology</h1>
                                </div>
                                <div className="exp-place-content">
                                    <p><b>MscIT, Information Technology</b></p>
                                    <p>2021-2023</p>
                                    <p>CPI: 8.06</p>
                                </div>
                                
                                <div className="exp-place-heading">
                                    <h1><b>Birla Institute of Technology Mesra,
                                        Jaipur Campus</b></h1>
                                </div>
                                <div className="exp-place-content">
                                        <p>BCA, Computer Science</p>
                                        <p>2018 - 2021</p>
                                        <p>CPI: 8.10</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}

export default Resume;