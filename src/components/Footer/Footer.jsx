import React from 'react';
import './Footer.css';
import footerData from '../../Data/FooterData';

// Función para crear la template del footer
function FooterTemplate({ footer }) {
  const {
    webName,
    address1,
    address2,
    addressImg,
    slogan,
    phoneImg,
    phone,
    instagramLink,
    instagramImg,
    instagramUser,
    authorLink,
    author,
    linkedinLink,
    linkedinImg,
    githubLink,
    githubImg
  } = footer;

  return (
    <footer className="cb-footer">
      <section className="cb-footer-website">
        <article className="cb-footer-location">
          <div>
            <p>
              {webName}
              <br />
              {address1}
              <br />
              {address2}
            </p>
          </div>
          <img className="cb-footer-img" src={addressImg} alt="Address" />
        </article>
        <article className="cb-footer-company">
          <h3 className="cb-company-name">{webName}</h3>
          <h3 className="cb-company-slogan">{slogan}</h3>
        </article>
        <article className="cb-footer-contact">
          <div className="cb-footer-img">
            <img src={phoneImg} alt="Phone" />
            <p>{phone}</p>
          </div>
          <div className="cb-footer-img">
            <a target="_blank" rel="noreferrer" href={instagramLink}>
              <img src={instagramImg} alt="Instagram" />
            </a>
            <p>{instagramUser}</p>
          </div>
        </article>
      </section>
      <section className="cb-footer-designer">
        <p>
          Diseñado por{' '}
          <a target="_blank" rel="noreferrer" href={authorLink}>
            {author}
          </a>
        </p>
        <div>
          <a className="cb-footer-img" target="_blank" rel="noreferrer" href={linkedinLink}>
            <img src={linkedinImg} alt="Linkedin" />
          </a>
          <a className="cb-footer-img" target="_blank" rel="noreferrer" href={githubLink}>
            <img src={githubImg} alt="Github" />
          </a>
        </div>
      </section>
    </footer>
  );
}

// Función para añadir el template con los datos especificados
function Footer() {
  return <FooterTemplate footer={footerData} />;
}

export default Footer;
