import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './SplashScreen.css';

function splash() {  
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

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    splash();

    setTimeout(() => {
      navigate("/home");
    }, 3300);

  });

  return (
    <div className='intro'>
      <h1 className='logo-header'>
      <span className='logo'>Welcome To</span><span className='logo'> &nbsp; My Portfolio</span>
      </h1>
    </div>
  );
}

export default SplashScreen;

