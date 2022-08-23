import React from "react";
import "../../styles/footer.css"
import {Link} from "react-router-dom";
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
      <nav>
        <ul className="navbarre-footer" style={{ display: "flex" }}>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
      <div className="icone">
        <FaFacebookF className="iconei" />
        <FaTwitter className="iconei" />
        <FaYoutube className="iconei" />
        <FaInstagram className="iconei" />
        <FaLinkedinIn className="iconei" />
      </div>
    </div>
  );
}
