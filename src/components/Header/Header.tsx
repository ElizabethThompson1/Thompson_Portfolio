import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../../assets/Elizabeth Thompson_Resume.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // Default active section
  const [menuOpen, setMenuOpen] = useState(false); // Track the state of the hamburger menu

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  // Function to toggle the hamburger menu
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <img src='/Images/favicon.png' alt="Logo" className="logo-image" /> {/* Use your logo image here */}
        </HashLink>

        {/* Toggle for theme switch */}
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch"></label>

        {/* Menu will be shown/hidden based on the state of the hamburger menu */}
        <nav className={menuOpen ? 'active' : ''}>
          <NavHashLink
            smooth
            to="#home"
            onClick={() => setActiveLink('#home')}
            className={activeLink === '#home' ? 'active' : ''}
          >
            Home
          </NavHashLink>
          <NavHashLink
            smooth
            to="#about"
            onClick={() => setActiveLink('#about')}
            className={activeLink === '#about' ? 'active' : ''}
          >
            About me
          </NavHashLink>
          <NavHashLink
            smooth
            to="#project"
            onClick={() => setActiveLink('#project')}
            className={activeLink === '#project' ? 'active' : ''}
          >
            Project
          </NavHashLink>
          <NavHashLink
            smooth
            to="#contact"
            onClick={() => setActiveLink('#contact')}
            className={activeLink === '#contact' ? 'active' : ''}
          >
            Contact
          </NavHashLink>
        </nav>

        {/* Hamburger menu - visible only on small screens */}
        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="icon-1"></div>
          <div className="icon-2"></div>
          <div className="icon-3"></div>
        </div>
      </Router>
    </Container>
  );
}
