import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero/Hero';

function Layout() {
  return (
    <>
      <Hero />
      <div className="layout container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Navbar /> {/* Add the "navbar" class */}
            </div>
            <div className="col-lg-9 outlet">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
