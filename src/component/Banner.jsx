import React from "react";
import bugs from "../images/BUGS.png";
import rabbit from "../images/BUGS-x.png";

function Banner() {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div
              className="Bunnyx Hexx"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="Solanaxxx">
                <img src={bugs} className="img-fluid" alt="bugs" />
              </div>
              <p>
                The first mythical rabbit coin. On Solana. Eh, what's up, doc?
                <br />
                The most legendary rabbit of all time, Bugs Bunny, is finally
                coming to crypto.
                <br /> He created the most carrot coin ever, and redefines the
                limits of the possible
                <br /> of what a united Web3 community can do.
              </p>
              <p>
                Make way for the rabbits. Make way for Bugs. Make way for us.
                <br /> Let's create a meme revolution. Let's create a movement,
                a giant movement. <br />
                Let's rise up. Together. Bugs will show you the way.
              </p>
              <a href="#">Join the Fair launch</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 align-self-end">
            <div className="rise-up fadein fadein--one">
              <img src={rabbit} className="img-fluid" alt="rabbit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
