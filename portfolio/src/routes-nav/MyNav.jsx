
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import "./Navigation.css"

function MyNav() {


  return (
    <div className="navbar-container">
      <div className="logo-container">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          Phoenix Petterson
        </ScrollLink>
      </div>
      <ul className="nav-items">
        <li className="nav-link">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Home
          </ScrollLink>
        </li>
        <li className="nav-link">
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Portfolio
          </ScrollLink>
        </li>
        <li className="nav-link">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            About me
          </ScrollLink>
        </li>
        <li className="nav-link">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Contact me
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}

export default MyNav;