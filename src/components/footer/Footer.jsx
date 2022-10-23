import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">KimaroTech</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_links">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_links">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer_links">Contact</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://github.com/keymarrow" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-github'></i>
                </a>

                <a href="https://www.facebook.com/kimarobts" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-facebook' ></i>
                </a>

                <a href="https://www.instagram/kimaro_bts" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-instagram' ></i>
                </a>

                <a href="https://www.youtube.com/channel/UC9ShVruIR0CSbo1wJP0kjlg" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-youtube' ></i>
                </a>
                <a href="https://linkedin.com/in/patrick-kimaro-596bb5186/" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-linkedin' ></i>
                </a>
                <a href="https://twitter.com/iam_kimaro" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-twitter' ></i>
                </a>
            </div>

            <span className="footer_copy">
                &#169; KimaroTech. All rigths reserved.
            </span>
        </div>
    </footer>
  );
};

export default Footer;