import React from 'react';
import {Link} from 'react-router-dom'

import logoImg from '../../assests/images/logo.svg';
import landingImg from '../../assests/images/landing.svg';

import studyIcon from '../../assests/images/icons/study.svg';
import giveClassesIcon from '../../assests/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assests/images/icons/purple-heart.svg';

import './styles.css';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua Plataforma de estudos online</h2>
                </div>
                    <img src={landingImg} 
                    alt="Plataforma de Estudos"
                    className="hero-image"
                    />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                    </Link>

                    <Link to="/give-classes" className="giveClasses">
                    <img src={giveClassesIcon} alt="Dar Aulas"/>
                    Estudar
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexoes ja realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>   
    )
}

export default Landing;
