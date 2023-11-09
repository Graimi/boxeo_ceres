import React from 'react';
import './WhatsAppButton.css';
import { messageApi } from '../../Data/ClubData';

function WhatsAppButton() {
  return (
    <a href={messageApi} className="cb-button-whatsApp" target="_blank" rel="noopener noreferrer">
      <img
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1698838647/Ceres%20Box/whatsapp_2_tbir5d.png"
        alt="logo de WhatsApp"
      />
    </a>
  );
}

export default WhatsAppButton;
