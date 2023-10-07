import './Footer.css';
import React from 'react';
import footerTemplate from './FooterTemplate';

function Footer() {
  return footerTemplate({
    webName: 'NORBA BOX',
    address1: 'Calle Falsa 123',
    address2: '10005 Cáceres',
    slogan: 'FUERZA Y VALOR',
    phone: '676 67 67 67',
    instagramLink: '#',
    instagramUser: 'norbabox',
    author: 'Graimi',
    linkedinLink: 'https://www.linkedin.com/in/floreslujan/',
    githubLink: 'https://github.com/Graimi'
  });
}

export default Footer;
