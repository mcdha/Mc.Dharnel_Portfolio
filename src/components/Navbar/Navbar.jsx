import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div data-aos="slide-right" data-aos-duration="1000" className="mb-5 animationRef">
        <div className='mb-4'>
          <NavLink 
            activeClassName="active" 
            className="nav-link" 
            to="/about"
          >
            <i className="bi bi-person-lines-fill me-3 ic"></i>About
          </NavLink>
        </div>
        <div className='mb-4'>
          <NavLink 
            activeClassName="active" 
            className="nav-link" 
            to="/skills"
          >
            <i className="bi bi-kanban me-3 ic"></i>Skills
          </NavLink>
        </div>
        <div className='mb-4'>
          <NavLink 
            activeClassName="active" 
            className="nav-link" 
            to="/projects"
          >
            <i className="bi bi-columns-gap me-3 ic"></i>Projects
          </NavLink>
        </div>
        <div className='mb-4'>
          <NavLink 
            activeClassName="active" 
            className="nav-link" 
            to="/contact"
          >
            <i className="bi bi-telephone me-3 ic"></i>Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
