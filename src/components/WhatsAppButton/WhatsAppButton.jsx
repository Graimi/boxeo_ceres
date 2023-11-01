import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const messageApi =
    'https://api.whatsapp.com/send?phone=34638560723&text=Hola!%20%C2%BFTienes%20alguna%20duda%20con%20los%20productos%3F';

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
