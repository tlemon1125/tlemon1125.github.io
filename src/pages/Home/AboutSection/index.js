import React from "react";

import './AboutSection.css';
import passportPic from '../../../assets/images/passport-photo.jfif';

function AboutSection() {
    return (
        <section className='about'>
            <h1 data-aos='flip-up' data-aos-duration='2000' data-aos-once='true'>About Me</h1>
            <div className='aboutInfo'>
                <div className='aboutImg' data-aos='flip-right' data-aos-duration='2000' data-aos-once='true'>
                    <img src={passportPic}/>
                </div>
                <div className='aboutDesc' data-aos='flip-left' data-aos-duration='2000' data-aos-once='true'>
                    <p>
                        My name is Khew Jia Peng. I am 22 years old, study Bachelor of Computer Science 
                        (Computer Network and Security) at University of Technology Malaysia. I am a passionate 
                        learner and like to explore the latest network security. During my free time, I practice 
                        some hacking techniques using Kali Linux to learn more about system vulnerabilities and watch 
                        some CTF Challenge videos to improve my skills. I also learned a lot of web development skills 
                        from my previous company. I am planning to get CEH (Certified Ethical Hacking) to increase my 
                        experience and skill in hacking.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;