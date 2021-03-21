import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Para suscripcion a mi pagina
        </p>
        <p className="footer-subscription-text">
          Puede darse de baja en cualquier momento.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Escribe el Email"
            />
            <Button buttonStyle="btn--outline">Suscribirse</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonios</Link>
            <Link to="/">Carreras</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terminos de Servicio</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Ubicacion</h2>
            <Link to="/">
              <i class="fa fa-building" aria-hidden="true" />
              NEW SYSTEM BOX, S.A.L.
            </Link>
            <Link class="mail" to="/">
              <i class="fa fa-map-marker" aria-hidden="true" />
              C/ Nicolás Morales 17, 28019, Madrid
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contacto</h2>
            <Link to="/">
              <i class="fa fa-phone" aria-hidden="true" />
              91 472 78 58
            </Link>
            <Link to="/">
              <i class="fa fa-fax" aria-hidden="true" />
              91 471 40 71
            </Link>
            <Link to="/">
              <i class="fa fa-mobile" aria-hidden="true" />
              686 96 60 43
            </Link>
            <Link to="/">
              <i class="fa fa-envelope" aria-hidden="true" />
              info@newsystembox.es
            </Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">NEW SYSTEM BOX© </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="https://www.facebook.com/New-System-BOX-310358462320790/"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
