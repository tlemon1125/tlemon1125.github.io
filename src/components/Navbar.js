import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navBar'>
          <h4>Khew's <span className='dynamic'>Portfolio</span></h4>
          <nav>
            <ul className='navLinks'>
              <li><a className='link' href="#home">Home</a></li>
              <li><a className='link' href="#about">About Me</a></li>
              <li><a className='link' href="#">Education</a></li>
              <li><a className='link' href="#">Experience</a></li>
              <li><a className='link' href="#">Projects</a></li>      
              <li><a className='link cta' href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
    );
}

export default NavBar;