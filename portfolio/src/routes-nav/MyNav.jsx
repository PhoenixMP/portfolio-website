
import React, { useContext } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import githubIcon from "../images/github-logo.png"
import linkedinIcon from "../images/linkedin-logo.png"
import emailIcon from "../images/email.png"
import "./Navigation.css"
import PageContext from './PageContext';

function MyNav() {

  const { currentPage } = useContext(PageContext);





  return (

    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-name">
          <ScrollLink
            to="home"
            smooth={true}
            duration={800}
            style={{ textDecoration: 'none' }}
          >
            Phoenix Petterson
          </ScrollLink>
        </div>
        <div className="navbar-icons-container">
          <div className="navbar-icons">
            <a href="https://github.com/PhoenixMP" className="github-icon navbar-icon" title="My GitHub" target="_blank">
              <img src={githubIcon} />
            </a>
            <a href="https://www.linkedin.com/in/phoenixpetterson/" className="linkedin-icon navbar-icon" title="My LinkedIn" target="_blank">
              <img src={linkedinIcon} />
            </a>
            <a href="mailto:phoenix.petterson@gmail.com" alt="Email" id="email-icon" className="email-icon navbar-icon" title="Email Me">
              <img src={emailIcon} />
            </a>
          </div>



        </div>
      </div>
      <div className="nav-items">
        <div className={` ${currentPage === "home" ? "on-page" : 'nav-link'}`}>
          <ScrollLink
            to="home"
            smooth={true}
            duration={800}
            style={{ textDecoration: 'none' }}
          >
            Home
          </ScrollLink>
        </div>
        <div className={` ${currentPage === "portfolio" ? "on-page" : 'nav-link'}`}>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={800}
            style={{ textDecoration: 'none' }}
          >
            Portfolio
          </ScrollLink>
        </div>
        <div className={`${currentPage === "about" ? "on-page" : 'nav-link'}`}>
          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            style={{ textDecoration: 'none' }}
          >
            About me
          </ScrollLink>
        </div>
        <div className='nav-link'>
          <a style={{ textDecoration: 'none' }} id="resume-link" href='http://localhost:5174/phoenix-petterson-resume.pdf' target="_blank" download='/phoenix-petterson-resume.pdf'>Resume
          </a>

        </div>
      </div>
    </div>
  );
}

export default MyNav;