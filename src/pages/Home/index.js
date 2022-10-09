import React from 'react';
import ProgramImage from '../../assets/images/pngwing.com.png';
import './Home.css';

function HomePage() {
    return (
        <div className='homepage'>
            <div className='myInfo'>
                <h1>KHEW JIA PENG</h1>
                <p>A passionate cybersecurity student / web developer from Malaysia who always discover the new knowledge.</p>
                <div className='socialMedia'>
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <img src={ProgramImage} />
        </div>
    );
}

export default HomePage;