import React, { useState, useEffect } from "react";
import { BigB } from "./BigB";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Popup from "./Popup";
import Sign from './Navbar/Sign';
import "./Navbar/Sign.css";

function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);

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
            Heri
            <p className="navbar-logo2">tians</p>
            <p className="navbar-logoicon">
              {" "}
              <i class="fa-solid fa-hand-holding-hand"></i>{" "}
            </p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <BigB
              buttonStyle="btn--outline"
              button
              onClick={() => setButtonPopup(true)}
            >
              SIGN UP
            </BigB>
          )}
          <Sign/>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form>
    <label>
    Adhaar No.:
    <input type="text" name="name" />
    </label>
    <br/>
    <label>
    Password:
    <input type="password" name="name" />
    </label>
    <br/>
    <label>
    Role:
    <select >
            
            <option value="Owner">Owner</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
    </label>
    <br/>

    <label>
    Village Name:
    <select >
            <option value="Lasudiya Khas">Lasudiya Khas</option>
            <option value="Gawa Kheda">Gawa Kheda</option>
            <option value="Mana Khedi">Mana Khedi</option>
            <option value="Nipaniya Kalan">Nipaniya Kalan</option>
            <option value="Beda Khedi">Beda Khedi</option>
          </select>
          
    </label>
    <br/>
    <label>
    <input type = "checkbox"/>
    I have read
    <a href={"https://vtop.vitbhopal.ac.in/vtop/initialProcess"}>the agreement</a>
    </label>
    <br/>

    
  <input type="submit" value="Submit" />
  </form>
          </Popup>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
