import { useState } from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ animeArray }) {
  const [showNavbar, setShowNavbar] = useState(false);

  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/anime"}>
              <li>Anime</li>
            </Link>
            <Link to={"/recommendations"}>
              <li>Recommendations</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
