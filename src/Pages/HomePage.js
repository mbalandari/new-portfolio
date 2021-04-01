import React from 'react'
import { faTwitterSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am <span>codingMaz.</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic quaerat aliquam fugiat deserunt totam nisi excepturi officiis dolorum similique magni nihil perferendis inventore ducimus, minima aliquid. Laudantium, culpa architecto!
                </p>
                <div className="icons">
                    <Link className="icon-holder"><FontAwesomeIcon icon={faTwitterSquare} className="icon tw" /></Link>
                    <Link className="icon-holder"><FontAwesomeIcon icon={faGithub} className="icon gh" /></Link>
                    <Link className="icon-holder"><FontAwesomeIcon icon={faLinkedin} className="icon li" /></Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage
