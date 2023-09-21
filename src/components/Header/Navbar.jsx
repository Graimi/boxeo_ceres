/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './Navbar.css';

import React, { useEffect, useState } from 'react';

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarVisibility = () => {
    if (window.scrollY > 10) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarVisibility);
    return () => {
      window.removeEventListener('scroll', handleNavbarVisibility);
    };
  }, []);

  // Función para cambiar el icono
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleNavbar();
    }
  };

  return (
    <div className={`cb-header ${isNavbarVisible || navbarOpen ? 'visible' : ''}`}>
      <a href="#hero">
        <h3 className="cb-header-logo">BOXEO CERES</h3>
      </a>
      {/* HAMBURGUER */}
      <label
        className="cb-hamburguer-label material-symbols-outlined"
        htmlFor="hamburger"
        onClick={toggleNavbar}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex="0"
      >
        {navbarOpen ? 'close' : 'menu'}
      </label>
      <input type="checkbox" name="cb-hamburguer" className="cb-hamburguer" id="hamburger" />
      {/* NAVIGATOR */}
      <nav className="cb-navbar">
        <ul className="cb-navbar-list">
          <li>
            <a href="#">El club</a>
          </li>
          <li>
            <a href="#">Clases</a>
          </li>
          <li>
            <a href="#">Horario</a>
          </li>
          <li>
            <a href="#">Tarifas</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
