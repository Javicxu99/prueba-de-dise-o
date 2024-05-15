import React from 'react';
import './Footer.css'; // Asegúrate de importar el archivo CSS

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <h1>MyCompany</h1>
      </div>
      <div className="footer-column">
        <h5 className="footer-title">Socials</h5>
        <ul className="footer-links">
          <li>YouTube</li>
          <li>Twitter</li>
          <li>TikTok</li>
        </ul>
      </div>
      <div className="footer-column">
        <h5 className="footer-title">Help</h5>
        <ul className="footer-links">
          <li>Email</li>
          <li>Contact</li>
          <li>Privacy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
    </div>
  );
}
