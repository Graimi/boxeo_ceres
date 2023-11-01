import './Club.css';
import React, { useState } from 'react';
import ClubData from '../../Data/ClubData';

function Club() {
  const [hoveredTitle, setHoveredTitle] = useState('');
  const [hoveredDescription, setHoveredDescription] = useState('');

  const handleResetClick = () => {
    setHoveredTitle('');
    setHoveredDescription('');
  };

  return (
    <div className="cb-club cb-page-shared" id="club">
      <h1>El Club</h1>
      <section className="cb-club-section">
        <div className="cb-club-title">
          <h2>Boxeo</h2>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1698702234/Ceres%20Box/Ceres_Box_Website_wgpdlf.png"
            alt="ring"
          />
          <h2>Ceres</h2>
        </div>
        <div className="cb-club-info">
          <article className="cb-club-reasons">
            <ul className="cb-club-reasons-list">
              {ClubData.map((reason) => (
                <li
                  className="cb-club-reason"
                  onMouseEnter={() => {
                    setHoveredTitle(reason.title);
                    setHoveredDescription(reason.description);
                  }}
                  onMouseLeave={() => {
                    handleResetClick();
                  }}
                >
                  <div className="cb-club-reason-title">
                    <p>{reason.title}</p>
                    <img
                      src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1698602159/Ceres%20Box/agregar_razlvc.png"
                      alt="Más"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="cb-club-city">Tu club de Boxeo en Cáceres</h3>
            <article className="cb-club-federation">
              <a href="https://www.feboxeo.es/" target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1697210715/Ceres%20Box/image-removebg-preview_1_t7mv2k.png"
                  alt="Federación Española de Boxeo"
                />
              </a>
              <a href="https://fexboxeo.es/" target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1697210716/Ceres%20Box/image-removebg-preview_o8runu.png"
                  alt="Federación Extremeña de Boxeo"
                />
              </a>
            </article>
          </article>
          <div className="cb-club-reason-card" style={{ display: hoveredTitle ? 'flex' : 'none' }}>
            <p>{hoveredTitle}</p>
            <p>{hoveredDescription}</p>
            <button
              className="cb-club-close-button material-symbols-outlined"
              onClick={handleResetClick}
              type="button"
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                cursor: 'pointer'
              }}
            >
              close
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Club;
