import { useState } from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

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
            <li>Home</li>
            <li>Anime</li>
            <li>Recommendations</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
