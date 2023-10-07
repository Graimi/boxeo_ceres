import './Footer.css';
import React from 'react';
import footerTemplate from './FooterTemplate';

function Footer() {
  return footerTemplate({
    webName: 'BOXEO CERES',
    address1: 'Calle Nicolás Copérnico 3',
    address2: '10004 Cáceres',
    slogan: 'FUERZA Y VALOR',
    phone: '605 89 53 54',
    instagramLink: 'https://www.instagram.com/escueladeboxeoceres/',
    instagramUser: 'escueladeboxeoceres',
    author: 'Graimi',
    linkedinLink: 'https://www.linkedin.com/in/floreslujan/',
    githubLink: 'https://github.com/Graimi'
  });
}

export default Footer;
