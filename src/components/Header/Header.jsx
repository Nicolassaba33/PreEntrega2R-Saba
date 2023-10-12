import "./Header.css";
import imgLogo from "../../assets/images/logo.jpg";
import SvgIcon from "@mui/material/SvgIcon";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="hero">
        <div className="container-logo">
          <Link to="/">
            <img src={imgLogo} alt="Logo" />
          </Link>
        </div>

        <div className="container-user">
          <Link to="/account">
            <SvgIcon component={PersonIcon} className="iconUser" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
