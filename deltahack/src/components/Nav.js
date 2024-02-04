import "./Nav.css"
import '../App.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if(window.innerWidth <=960){
        setButton(false)
    } else{
        setButton(true)
    }
  }


  useEffect(() => {
    showButton();
  },[])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="nav">
        <div className="nav-container" >
          <Link to="/" className="nav-logo" onClick={closeMenu}>
          IntelliBin
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" >
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-links" to="/Profile" onClick={closeMenu}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Shop" className="nav-links" onClick={closeMenu}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/info" className="nav-links" onClick={closeMenu}>
                Info
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
