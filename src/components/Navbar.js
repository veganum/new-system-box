import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NSC
            <i class="fas fa-box-open" />
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link to="/" class="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/services" class="nav-links" onClick={closeMobileMenu}>
                Servicios
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/products" class="nav-links" onClick={closeMobileMenu}>
                Productos
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                class="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                INSCRIBIRSE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">INSCRIBIRSE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
