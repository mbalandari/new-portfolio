import React from 'react'
import about from '../img/pic4.jpg'

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="about" />
            </div>
            <div className="about-info">
                <h4>I am<span> codingMaz</span></h4>
                <p className="about-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa unde minima dolorum, a similique! Magnam culpa unde minima dolorum, a similique.</p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Field of Work</p>
                        <p>Education</p>
                        <p>Languages</p>
                        <p>Residence</p>
                        <p>Email</p>
                    </div>
                    <div className="right-section">
                        <p className="p-margin-left">: codingMaz</p>
                        <p className="p-margin-left">: Programming</p>
                        <p className="p-margin-left">: Master of Science</p>
                        <p className="p-margin-left">: English, Persian</p>
                        <p className="p-margin-left">: Istanbul, Turkey</p>
                        <p className="p-margin-left">: m.balandari.toroghi@gmail.com</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection
