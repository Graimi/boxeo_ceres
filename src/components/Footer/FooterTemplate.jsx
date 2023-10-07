// import './Footer.css';
// import React from 'react';

// function FooterTemplate(footer) {
//   return (
//     <div className="cb-footer">
//       <section className="cb-footer-website">
//         <section className="cb-footer-location">
//           <div className="cb-location-address">
//             <p>
//               {footer.webName}
//               <br />
//               {footer.address1}
//               <br />
//               {footer.address2}
//             </p>
//           </div>
//           <img className="cb-location-img" src={footer.addressImg} alt="Adress" />
//         </section>
//         <section className="cb-footer-slogan">
//           <h3 className="cb-slogan-boxer">{footer.webName}</h3>
//           <h3 className="cb-slogan-text">{footer.slogan}</h3>
//         </section>
//         <section className="cb-footer-contact">
//           <div className="cb-contact-phone">
//             <img src={footer.phoneImg} alt="Phone" />
//             <p>{footer.phone}</p>
//           </div>
//           <div className="cb-contact-instagram">
//             <a target="_blank" rel="noreferrer" href={footer.instagramLink}>
//               <img src={footer.instagramImg} alt="Instagram" />
//             </a>
//             <p>{footer.instagramUser}</p>
//           </div>
//         </section>
//       </section>
//       <section className="cb-author-social">
//         <p className="cb-footer-author">
//           Diseñado por{' '}
//           <a target="_blank" rel="noreferrer" href={footer.authorLink}>
//             {footer.author}
//           </a>
//         </p>
//         <div>
//           <a
//             className="cb-social-linkedin"
//             target="_blank"
//             rel="noreferrer"
//             href={footer.linkedinLink}
//           >
//             <img src={footer.instagramImg} alt="Linkedin" />
//           </a>
//           <a className="cb-social-github" target="_blank" rel="noreferrer" href={footer.githubLink}>
//             <img src={footer.githubImg} alt="Github" />
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default FooterTemplate;

import './Footer.css';
import React from 'react';

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
    <div className="cb-footer">
      <section className="cb-footer-website">
        <section className="cb-footer-location">
          <div className="cb-location-address">
            <p>
              {webName}
              <br />
              {address1}
              <br />
              {address2}
            </p>
          </div>
          <img className="cb-footer-img" src={addressImg} alt="Address" />
        </section>
        <section className="cb-footer-slogan">
          <h3 className="cb-slogan-boxer">{webName}</h3>
          <h3 className="cb-slogan-text">{slogan}</h3>
        </section>
        <section className="cb-footer-contact">
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
        </section>
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
    </div>
  );
}

export default FooterTemplate;
