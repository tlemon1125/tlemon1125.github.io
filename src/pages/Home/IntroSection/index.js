import React, { useEffect } from 'react';

import './IntroSection.css';
import ProgramImage from '../../../assets/images/pngwing.com.png';

function IntroSection() {
    return (
        <section className='homepage'>
            <div className='myInfo' data-aos="slide-right" data-aos-duration="2000" data-aos-once='true'>
                <h1>KHEW JIA PENG</h1>
                <p>A passionate cybersecurity student / web developer from Malaysia who always discover the new knowledge.</p>
                <div className='socialMedia'>
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <img className='img-fluid' src={ProgramImage} 
                data-aos="slide-left" 
                data-aos-duration="2000"
                data-aos-once='true'
            />
        </section>
    );
}

export default IntroSection;