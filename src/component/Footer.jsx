import React from "react";
import logoxxx from "../images/Bugs-logo.svg";
function Footer() {
  return (
    <section className="footer">
      <div className="centerxx">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="logoox"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <img src={logoxxx} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
              <div class="Feels" data-aos="fade-up" data-aos-duration="1000">
                <a href="#">
                  <span>
                    <i class="bi bi-twitter-x"></i>
                  </span>
                  (formerly Twitter)
                </a>
                <p>
                  Community center (community group and channel). Official
                  project communication location, updates, community discussion
                  point, community support, resources sharing, memes, movements,
                  Airdrops, etc.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
              <div class="Feels" data-aos="fade-up" data-aos-duration="1500">
                <a href="#">
                  <span>
                    <i class="bi bi-twitter"></i>
                  </span>
                  Telegram
                </a>
                <p>
                  Live the latest official news related to Bugs coin and its
                  community. Memes, Airdrops and Giveaways. Also a Community on
                  X
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
              <div class="Feels" data-aos="fade-up" data-aos-duration="2000">
                <a href="#">
                  <span>
                    <i class="bi bi-instagram"></i>
                  </span>
                  Instagram
                </a>
                <p>
                  Look at the most beautiful memes on Bugs Bunny and the Looney
                  Tunes around the world. Share resources
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
              <div class="Feels" data-aos="fade-up" data-aos-duration="2500">
                <a href="#">
                  <span>
                    <i class="bi bi-reddit"></i>
                  </span>
                  Reddit
                </a>
                <p>Bugs Community on Reddit</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="socialx">
                <li>
                  <a href="#">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-reddit"></i>
                  </a>
                </li>
              </ul>
              <p className="Reserved">© 2024 Bugs coin. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
