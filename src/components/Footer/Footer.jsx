import React from 'react';
import './Footer.css';
import FooterTemplate from './FooterTemplate';

function Footer() {
  const footerData = {
    webName: 'BOXEO CERES',
    address1: 'Calle Nicolás Copérnico 3',
    address2: '10004 Cáceres',
    addressImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1696670250/Ceres%20Box/location_oy3ano_peiznt.png',
    slogan: 'FUERZA Y VALOR',
    phone: '605 89 53 54',
    phoneImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1696670250/Ceres%20Box/phone_su2rtx_jp3aqt.png',
    instagramLink: 'https://www.instagram.com/escueladeboxeoceres/',
    instagramUser: 'escueladeboxeoceres',
    instagramImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1696670250/Ceres%20Box/instagram_nfyr4h_zyrgti.png',
    author: 'Graimi',
    authorLink: 'https://portfolio-jaime-flores.netlify.app/#home',
    linkedinLink: 'https://www.linkedin.com/in/floreslujan/',
    linkedinImg:
      '    https://res.cloudinary.com/dwsffp1eq/image/upload/v1696670250/Ceres%20Box/linkedin_r0jy7b_rxoqnh.png',
    githubLink: 'https://github.com/Graimi',
    githubImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1696670250/Ceres%20Box/github_iq58vt_z5xlfl.png'
  };

  return <FooterTemplate footer={footerData} />;
}

export default Footer;
