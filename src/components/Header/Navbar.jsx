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

  return (
    <div
      className={`bc__section__header__layout bc__layout__flex ${isNavbarVisible ? 'visible' : ''}`}
    >
      <a href="#hero">
        <h3 className="bc__header__logo">NORBA BOX</h3>
      </a>
      {/* HAMBURGUER */}
      <label
        className="bc__hamburguer__label"
        htmlFor="hamburger"
        onClick={toggleNavbarOnHamburgerClick}
      >
        &#9776;
      </label>
      <input type="checkbox" name="bc__hamburguer" className="bc__hamburguer" id="hamburger" />
      {/* NAVIGATOR */}
      <nav className={`bc__section__navbar ${isNavbarVisible ? 'visible' : ''}`}>
        <ul className="bc__navbar__header bc__layout__flex">
          <li>
            <a className="bc__navbar__inicio" href="#hero">
              Inicio
            </a>
          </li>
          <li>
            <a className="bc__navbar__shop" href="#next">
              Tienda
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=34638560723&text=Hola!%20%C2%BFTienes%20alguna%20duda%20con%20los%20productos%3F"
              target="_blank"
              rel="noreferrer"
              className="bc__contact__button"
            >
              <span className="bc__contact__text--plain">&nbsp;contacto&nbsp;</span>
              <span className="bc__contact__text--hover" aria-hidden="true">
                &nbsp;contacto&nbsp;
              </span>
            </a>
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
const navBar = document.querySelector('.bc__section__header__layout');
const heroSection = document.querySelector('#hero');
const invisibleNav = () => {
  // No estoy seguro de por qué ha funcionado con .scrollY cuando debería ser con .scrollX, pura casualidad
  // Se ha añadido el 80 para que la navbar aparezca tan pronto como se mueva la venta para no superponer los datos
  if (window.scrollY * 80 > heroSection.offsetHeight) {
    navBar.style.backgroundColor = 'var(--bc__color--black)';
  }
  if (window.scrollY * 80 < heroSection.offsetHeight) {
    navBar.style.backgroundColor = 'transparent';
  }
};
const functionInvisibleNav = () => window.addEventListener('scroll', invisibleNav);

// Creamos la siguiente función para que no se vean en transparente las opciones cuando pinchemos en la hamburguesa
const hamburger = document.querySelector('.bc__hamburguer__label');
const hamburgerToggle = () => {
  navBar.style.backgroundColor = 'var(--bc__color--black)';
};

hamburger.addEventListener('click', hamburgerToggle);

export default functionInvisibleNav;
*/
