import React from "react";
import mythical from "../images/bx.png";
const Community = () => {
  return (
    <section className="community" id="Community">
      <div className="cryptoxx">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div
                className="Community"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h1>Community</h1>
                <p>
                  Introducing a unique crypto community experience. The
                  community is incredibly crazy - our community is at the heart
                  of Bugs meme. We are tired of crypto projects that are not
                  close to their community and do not recognize them as they
                  should.. here, BUGS belongs to the community, fully community
                  driven.
                </p>

                <p>
                  Freedom. Fun. Support and mutual aid... join us for a united,
                  close-knit, ever-growing community, where you can interact
                  with true enthusiasts, and let your creativity and art express
                  like never before. The community needs you. Join us as you
                  are, you are all welcome ♥️
                </p>

                <p>
                  Each member of the community is important! The community is
                  regularly rewarded with exclusive Airdrops, giveaways,
                  rewards, meme contests, etc. Feels good right? 😎
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="bgtc">
                <img
                  src={mythical}
                  className="img-fluid"
                  alt="rabbit"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Feels" id="Memes">
        <div className="container-fluid">
          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3">
              <h2>Join us on:</h2>
              <a href="#">
                <span>
                  <i class="bi bi-twitter-x"></i>
                </span>
                (formerly Twitter)
              </a>
              <a href="#">
                <span>
                <i class="bi bi-telegram"></i>
                </span>
                Telegram
              </a>
              <a href="#">
                <span>
                  <i class="bi bi-instagram"></i>
                </span>
                Instagram
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-9">
              <p>
                <strong>Telegram:</strong> community center (community group and
                channel). Official project communication location, updates,
                community discussion point, community support, resources
                sharing, memes, movements, Airdrops, etc.
              </p>
              <p>
                <strong>X (formerly Twitter):</strong> live the latest official
                news related to Bugs coin and its community. Memes, Airdrops and
                Giveaways. Also a Community on X.
              </p>
              <p>
                <strong>Instagram:</strong> look at the most beautiful memes on
                Bugs Bunny and the Looney Tunes around the world. Share
                resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
