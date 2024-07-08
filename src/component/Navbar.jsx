import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logonv.png";
import { X } from "lucide-react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [subActive, setSubActive] = useState(false);
  const openmenu = () => {
    setActive(true);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <section className="wrapper">
          <div className="header-item-left bcxx">
            <Link to="/" className="brand">
              <img src={logo} className="img-fluid" alt="logo" />
            </Link>
          </div>
          <div className="header-item-center">
            <div
              onClick={() => {
                setActive(false);
                setSubActive(false);
              }}
              className={`overlay ${active ? "active" : ""}`}
            ></div>
            <nav className={`menu ${active ? "active" : ""}`} id="menu">
              <div className="menu-mobile-header">
                <div className="menu-mobile-title"></div>
                <button
                  onClick={() => setActive(false)}
                  type="button"
                  className="menu-mobile-close"
                >
                  <X />
                </button>
              </div>
              <ul className="menu-section">
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="/#About">About</a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#Community" className="contsss">
                    Community
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#How" className="contsss">
                    How to buy
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#loves" className="contsss">
                    Bugs loves Solana
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#Memes" className="contsss">
                    Memes
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#Roadmap" className="contsss">
                    Roadmap
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#Tokenomics" className="contsss">
                    Tokenomics
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#Ecosystem" className="contsss">
                    Ecosystem Hub
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <Link to="/buy-bugs" className="contsss">
                    Buy BUGS
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-item-right">
            <button
              type="button"
              className="menu-mobile-toggle"
              onClick={openmenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </section>
      </div>
    </header>
  );
};
