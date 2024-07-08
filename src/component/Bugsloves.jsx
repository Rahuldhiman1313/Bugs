import React from "react";
import Profile from "../images/Profile-Bugs.png";

const Bugsloves = () => {
  return (
    <section className="community settled" id="loves">
      <div className="cryptoxx">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div
                className="Community"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h4>Bugs loves Solana</h4>
                <p>
                  Yeah, our friend Bugs loves Solana so much that he dug his
                  burrow on it and settled in. But why?
                </p>

                <p>
                  Fast. Cheap. Reliable. Robust. Efficient and secure.
                  Decentralized.
                  <br /> General public.
                  <br /> Proof-of-History. Scalable. Resilient too.. <br />
                  Up to 60k TPS.
                </p>

                <p>
                  RUST. Developers love Solana and use it as a preference.
                  Amazing community and growing innovation ecosystem 💚
                </p>
                <p>
                  We believe in a great future for Solana, a mass adoption.
                  Solana is here to stay. And BUGS on Solana too. BUGS, the
                  people's memecoin, on the people's blockchain.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img
                src={Profile}
                className="img-fluid"
                alt="rabbit"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="redx" id="Ecosystem">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <p data-aos="fade-up" data-aos-duration="1000">
                <i>Important:</i> Bugs does not participate in the blockchains
                war, and belongs to everyone, for all chains. He loves Solana,
                but his community coin should be available everywhere,
                accessible to everyone, regardless of network. <br />
                Solana is here to stay, but Bugs will also discover other
                horizons when the time comes, without ever abandoning Solana.
                Visit the Ecosystem Hub page to learn more about current and
                upcoming BUGS integrations and expansions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bugsloves;
