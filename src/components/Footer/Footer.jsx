import "./Footer.css";

import iconTwitter from "../../assets/Images/iconTwitter.svg";
import iconInstagram from "../../assets/Images/iconInstagram.svg";
import iconFacebook from "../../assets/Images/iconFacebook.svg";
const Footer = () => {
  return (
    <div className="container">
      <div className="contact">
        <a href="https://facebook.com/">
          <img src={iconFacebook} alt="IconFacebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={iconInstagram} alt="IconInstagram" />
        </a>
        <a href="https://twitter.com/">
          <img src={iconTwitter} alt="IconTwitter" />
        </a>
      </div>
      <p>&copy; Bellof Styles</p>
    </div>
  );
};
export default Footer;
