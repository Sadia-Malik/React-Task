import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo@2x.png'

const Navbar = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isNewsHovered, setIsNewsHovered] = useState(false);
  const [isPagesHovered, setIsPagesHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const handleHover = (item, setter) => {
    setter(true);
  };

  const handleLeave = (item, setter) => {
    setter(false);
  };

  return (
    <section>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="img" className="w-50 img-fluid" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleHover('home', setIsHomeHovered)}
                onMouseLeave={() => handleLeave('home', setIsHomeHovered)}
              >
                                <a
                  className="nav-link dropdown-toggle px-2"
                  href="#new"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isHomeHovered}
                >
                  Home
                </a>


               <ul className={`dropdown-menu py-4 px-3  ${isHomeHovered ? 'show' : ''}`}>
                  <li><a className="dropdown-item" href="#new">Home Page1</a></li>
                  <li><a className="dropdown-item" href="#new">Home Page 2</a></li>
                  
                </ul>
              </li>
              <li className="nav-item">
             <a className="nav-link" href="#new">About</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#new">Services</a>
           </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleHover('news', setIsNewsHovered)}
                onMouseLeave={() => handleLeave('news', setIsNewsHovered)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#new"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isNewsHovered}
                >
                  News
                </a>
                <ul className={`dropdown-menu py-4 px-3 ${isNewsHovered ? 'show' : ''}`}>
                  <li><a className="dropdown-item" href="#new">News</a></li>
                  <li><a className="dropdown-item" href="#new">Single Report</a></li>
                  
                  
                </ul>
              </li>

              <li className="nav-item">
             <a className="nav-link" href="#new">Case Study</a>
           </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleHover('pages', setIsPagesHovered)}
                onMouseLeave={() => handleLeave('pages', setIsPagesHovered)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#new"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isPagesHovered}
                >
                  Pages
                </a>
                <ul className={`dropdown-menu py-4 px-3 ${isPagesHovered ? 'show' : ''}`}>
                  <li><a className="dropdown-item" href="#new">Team </a></li>
                  <li><a className="dropdown-item" href="#new">Client</a></li>
                  
                 
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleHover('contact', setIsContactHovered)}
                onMouseLeave={() => handleLeave('contact', setIsContactHovered)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#yuyi"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isContactHovered}
                >
                  Contact
                </a>
                <ul className={`dropdown-menu py-4 px-3 ${isContactHovered ? 'show' : ''}`}>
                  <li><a className="dropdown-item" href="#yu">Contact Us 1</a></li>
                  <li><a className="dropdown-item" href="#we">Contact Us 2</a></li>
                  
                 
                </ul>
              </li>
            
            </ul>
            <div className="d-lg-flex d-md-flex">
              <div>
                <p>
                <i class="fa-solid fa-phone text-primary "></i> <span className='phonen'>0361 23456</span> <br />
                   <span className='call'>Free Consultation</span> 
                </p>
              </div>
               <div>
                <button className="btn-primary text-white btn-group-lg d-inline-block p-2 rounded ms-lg-5 fs-4 mt-2 bg-primary border-0">
                  Hire Us Now
                </button>
              </div>
           </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

 
