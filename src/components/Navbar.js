import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navBar'>
          <h4>Khew's <span className='dynamic'>Portfolio</span></h4>
          <nav>
            <ul className='navLinks'>
              <li><NavLink className='link' to="/home">Home</NavLink></li>
              <li><NavLink className='link' to="">Education</NavLink></li>
              <li><NavLink className='link' to="">Experience</NavLink></li>
              <li><NavLink className='link' to="/project">Projects</NavLink></li>      
              <li><NavLink className='link cta' to='#'>Contact Us</NavLink></li>
            </ul>
          </nav>
        </div>
    );
}

export default NavBar;