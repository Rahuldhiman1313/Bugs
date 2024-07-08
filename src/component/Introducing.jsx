import React from "react";
import Yosemite from "../images/Yosemite-Bugs.png";
import sx from "../images/s1.png";
import sx2 from "../images/s2.png";
import sx3 from "../images/s3.png";
import sx4 from "../images/s4.png";
import sx5 from "../images/s5.png";
import sx6 from "../images/s6.png";
import sx7 from "../images/s7.png";

function Introducing() {
  return (
    <section className="Introducing" id="About">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img
              src={Yosemite}
              className="img-fluid wsxz"
              alt="rabbit"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div
              className="Bunnyx coinx"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>About</h1>
              <p>
                Introducing Bugs coin, the first coin of the legendary, most
                famous and beloved rabbit of all time, Bugs Bunny.
              </p>
              <p>
                Ah, Bugs. More than 83 years of History.
                <br /> A legendary character. Cartoons that have marked entire
                generations. And mythical memes.
                <br /> Bugs Bunny is an international star, a Pop Culture legend
                🐰🥕 who has his own star on the Hollywood Walk of Fame, in Los
                Angeles, (USA). And now, he deserves his coin, just like Pepe on
                Ethereum.
              </p>
              <p>
                A Quality Memecoin, with a capital M. A real meme, as a meme
                should be.
                <br /> It’s that simple. 4K memes. High Resolution.
                <br /> We must restore the image and honor of memecoins, by
                making one about a famous and mythical character.
                <br /> Get ready for a true artistic and cultural community
                movement 🐰 <br />
                Created by the people, for the people. Developed on Solana.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <ul className="xxxcd" data-aos="fade-up" data-aos-duration="1000">
              <li>
                <img src={sx} className="img-fluid" alt="rabbit" />
              </li>
              <li>
                <img src={sx2} className="img-fluid" alt="rabbit" />
              </li>
              <li>
                <img src={sx3} className="img-fluid" alt="rabbit" />
              </li>
              <li>
                <img src={sx4} className="img-fluid" alt="rabbit" />
              </li>
              <li>
                <img src={sx5} className="img-fluid" alt="rabbit" />
              </li>
              <li>
                <img src={sx6} className="img-fluid" alt="rabbit" />
              </li>
              <li>
                <img src={sx7} className="img-fluid" alt="rabbit" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introducing;
