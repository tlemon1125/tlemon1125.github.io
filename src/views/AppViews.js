import React from 'react';
import ProgramImage from '../images/pngwing.com.png';

const exports = {};

// Views
const Intro = () => {
  return (
    <div className='intro'>
      <h1 className='logo-header'>
        <span className='logo'>Welcome To</span><span className='logo'> &nbsp; My Portfolio</span>
      </h1>
    </div>
  );
}

const NavBar = () => {
  return (
    <div className='navBar'>
      <h4>Khew's Portfolio</h4>
      <nav>
        <ul className='navLinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Education</a></li>
          <li><a href='#'>Experience</a></li>
          <li><a href='#'>Projects</a></li>      
          <li><a className='cta' href='#'>Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

exports.Wrapper = (props) => {
  const {content} = props;
  return (
    <div className="App">   
      <Intro />
      <header className="App-header">
        <NavBar />
        {content}
      </header>
    </div>
  )
}

exports.HomePage = () => {
  return (
    <div className='homepage'>
      <div className='myInfo'>
        <h1>KHEW JIA PENG</h1>
        <p>A passionate cybersecurity student / web developer from Malaysia who always discover the new knowledge.</p>
        <div className='socialMedia'>
          <a href="#"><i class="fa-brands fa-github"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <img src={ProgramImage} />
    </div>

  );
}

//Functions
export function splashscreen () {
  let intro = document.querySelector('.intro');
  let logo = document.querySelector('.logo-header');
  let logoSpan = document.querySelectorAll('.logo');

  setTimeout(() => {
    //The font come in function and time
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    //The font fade away in function and time
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 2000);

    //The black page goes up
    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300);
 
  });
}

export default exports;
