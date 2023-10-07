import React from 'react';

function footerTemplate(footer) {
  return (
    <div>
      <section className="bc__footer__web">
        <section className="bc__footer__location bc__layout__flex">
          <div className="bc__location__address">
            <p>
              {footer.webName}
              <br />
              {footer.address1}
              <br />
              {footer.address2}
            </p>
          </div>
          <img
            className="bc__location__img"
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/location_oy3ano.png"
            alt="icono de location"
          />
        </section>
        <section className="bc__footer__slogan">
          <h3 className="bc__slogan__boxer">{footer.webName}</h3>
          <h3 className="bc__slogan__text">{footer.slogan}</h3>
        </section>
        <section className="bc__footer__contact">
          <div className="bc__contact__phone bc__layout__flex">
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/phone_su2rtx.png"
              alt="icono de movil"
            />
            <p>{footer.phone}</p>
          </div>
          <div className="bc__contact__instagram bc__layout__flex">
            <a target="_blank" rel="noreferrer" href={footer.instagramLink}>
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/instagram_nfyr4h.png"
                alt="icono de Instagram"
              />
            </a>
            <p>{footer.instagramUser}</p>
          </div>
        </section>
      </section>
      <section className="bc__footer__author">Hecho por {footer.author}</section>
      <section className="bc__author__social">
        <a
          className="bc__social__linkedin"
          target="_blank"
          rel="noreferrer"
          href={footer.linkedinLink}
        >
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/linkedin_r0jy7b.png"
            alt="icono de Linkedin"
          />
        </a>
        <a className="bc__social__github" target="_blank" rel="noreferrer" href={footer.githubLink}>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/github_iq58vt.png"
            alt="icono de Github"
          />
        </a>
      </section>
      ;
    </div>
  );
}

export default footerTemplate;
