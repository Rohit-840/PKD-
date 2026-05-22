import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { profile } from '../../data/site.js';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__monogram">PKD</span>
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </div>
        </div>

        <nav className="footer__socials" aria-label="Social profiles">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </nav>

        <p className="footer__legal">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
