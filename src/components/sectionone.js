import React from 'react';
import '../css/sectioncss.css'
import animimage from '../images/anil.png'
const Section = () =>{
    return(
            <div className="container">
                <div className="left-section">
                    
                    <div className="text-content">
                        <h1>Hello! I am</h1>
                        <h1 className='name'>Anil Mangtani</h1>

                        {/* <p>I am a Website developer, Desinger, Freelancer.</p> */}
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">UI/UX Designer</div>
                                <div className="i-title-item">Writer</div>
                                <div className="i-title-item">Video Editor</div>
                               
                            </div>
                        </div>
                        <div className="i-desc">
                            I am passionate about creating websites and new technology. Currently based on Jaipur Rajasthan.
                        </div>
                    </div>

                    <div className="cv-button">
                        <a href="/#contact" className='download-cv'>HIRE ME</a>
                    </div>

                   
                        
                </div>


                <div className="right-section">
                    <div className="i-bg"></div>    
                </div>
                    <div className="home-image">
                        <img src={animimage} className='port-image' alt="" />
                    </div>                

               

            </div>
    
    )
}

export default Section;