/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './Navbar.css';

import React, { useEffect, useState } from 'react';

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleNavbarVisibility = () => {
    if (window.scrollY > 80) {
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

  const toggleNavbarOnHamburgerClick = () => {
    setIsNavbarVisible(true);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleNavbar();
    }
  };

  return (
    <div className={`cb-header ${isNavbarVisible ? 'visible' : ''}`}>
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
      <nav className={`cb-section-navbar ${navbarOpen ? 'visible' : ''}`}>
        <ul className="cb-navbar-list">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#schedule">Horario</a>
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

/*
import './Header.css';

import headerTemplate from './HeaderTemplate.js';

// Aquí añadimos el template del header
const headerSection = document.querySelector('#header');

headerSection.innerHTML += headerTemplate({
  webName: 'NORBA BOX',
  contactLink:
    'https://api.whatsapp.com/send?phone=34638560723&text=Hola!%20%C2%BFTienes%20alguna%20duda%20con%20los%20productos%3F'
});

// A partir de aquí creamos el código para la invisible navbar
const navBar = document.querySelector('.cb-section-header-layout');
const heroSection = document.querySelector('#hero');
const invisibleNav = () => {
  // No estoy seguro de por qué ha funcionado con .scrollY cuando debería ser con .scrollX, pura casualidad
  // Se ha añadido el 80 para que la navbar aparezca tan pronto como se mueva la venta para no superponer los datos
  if (window.scrollY * 80 > heroSection.offsetHeight) {
    navBar.style.backgroundColor = 'var(--cb-color--black)';
  }
  if (window.scrollY * 80 < heroSection.offsetHeight) {
    navBar.style.backgroundColor = 'transparent';
  }
};
const functionInvisibleNav = () => window.addEventListener('scroll', invisibleNav);

// Creamos la siguiente función para que no se vean en transparente las opciones cuando pinchemos en la hamburguesa
const hamburger = document.querySelector('.cb-hamburguer-label');
const hamburgerToggle = () => {
  navBar.style.backgroundColor = 'var(--cb-color--black)';
};

hamburger.addEventListener('click', hamburgerToggle);

export default functionInvisibleNav;
*/
