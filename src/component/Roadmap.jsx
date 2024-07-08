import React from "react";
import logox from "../images/bhx.gif";
import holding from "../images/holding-carrot.png";

function Roadmap() {
  return (
    <section className="Roadmap" id="Roadmap">
      <div className="Bugsxxx">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="Community sarcastic"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h4>Roadmap</h4>
                <p>
                  Our roadmap is sarcastic because everyone knows it is useless
                  for a memecoin. Well, except for BUGS controlling the world
                  and be integrated everywhere, as present as possible in the
                  world.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="moon">
                <img
                  src={logox}
                  className="img-fluid"
                  alt="rabbit"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <img
                  src={holding}
                  className="img-fluid"
                  alt="rabbit"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="x-road">
                <div
                  className="Phasex"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h5>Phase 1</h5>
                  <p>BUGS is born. Community initiatives begin.</p>
                </div>
                <div
                  className="Phasex"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h5>Phase 2</h5>
                  <p>
                    The Bugs Community is forming, is getting together, growing,
                    becoming known around the world. <br /> Becomes influential.
                    HOLD BUGS and make the world vibrate. The community comes
                    together and propels BUGS to the moon, the galaxy, and even
                    To infinity, and beyond!
                  </p>
                </div>
                <div
                  className="Phasex"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h5>Phase 3</h5>
                  <p>
                    The community joins BUGS in the galaxy. Vibes, memes and
                    fun.
                  </p>
                  <p>
                    At that time, the last phase, BUGS is in the process of
                    being integrated everywhere, including games, cartoons,
                    chains, dApps, crypto extensions, payments, etc.
                  </p>
                  <p>
                    BUGS and his community take control of the entire universe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
