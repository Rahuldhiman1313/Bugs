import React from "react";
import rtx from "../images/r.png";
import vult from "../images/vult.svg";
import brandlogo from "../images/s1.png";
import logoxx from "../images/logo.svg";
import down from "../images/down.svg";
import convar from "../images/convar.svg";

function Buy() {
  return (
    <section className="buyss">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-7">
            <div className="rt">
              <div className="bfxd">
                <img src={rtx} />
              </div>
              <div className="bxox">
                <div className="Max-x">
                  <div className="Fromx">
                    <form>
                      <div className="Fr-qz">
                        <div className="savex">
                          <label>From</label>
                          <div className="valut">
                            <span>
                              <img src={vult} />
                            </span>
                            <span className="amouv">0</span>
                          </div>
                        </div>
                        <div className="nhxs">
                          <input type="text" placeholder="0.00" />
                          <span>-0.00</span>
                        </div>
                      </div>
                      <div className="max">
                        <div className="byx">
                          <button>Max</button>
                          <button>50%</button>
                        </div>
                        <div className="select-box">
                          <div className="brand-logo">
                            <img src={brandlogo} />
                          </div>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>SOL</option>
                            <option value="1">SOL</option>
                            <option value="2">SOL</option>
                            <option value="3">SOL</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="arrowx">
                    <img src={down} />
                  </div>
                </div>
                <div className="Max-x">
                  <div className="Fromx">
                    <form>
                      <div className="Fr-qz">
                        <div className="savex">
                          <label>From</label>
                          <div className="valut">
                            <span>
                              <img src={vult} />
                            </span>
                            <span className="amouv">0</span>
                          </div>
                        </div>
                        <div className="nhxs">
                          <input type="text" placeholder="0.00" />
                          <span>-0.00</span>
                        </div>
                      </div>
                      <div className="max">
                        <div className="byx">
                          <button>Max</button>
                          <button>50%</button>
                        </div>
                        <div className="select-box">
                          <div className="brand-logo">
                            <img src={logoxx} />
                          </div>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>BUGS</option>
                            <option value="1">BUGS</option>
                            <option value="2">BUGS</option>
                            <option value="3">BUGS</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="SOLxx">
                <div className="Mini-mum grddd">
                  <div className="Pricex">
                    <span>1 SOL</span>
                    <span>
                      <img src={convar} />
                    </span>
                    <span>0.256 BUGS</span>
                  </div>
                  <div className="loderxx">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
                <div className="Mini-mum Receivedxxx">
                  <div className="Pricex">
                    <span>
                      Minimum Received <i class="bi bi-question-circle"></i>
                    </span>
                  </div>
                  <div className="Pricex">
                    <span>0 BUGS</span>
                  </div>
                </div>
                <div className="Mini-mum Receivedxxx">
                  <div className="Pricex">
                    <span>
                      Price Impact <i class="bi bi-question-circle"></i>
                    </span>
                  </div>
                  <div className="Pricex">
                    <span>--</span>
                  </div>
                </div>
                <div className="Mini-mum Receivedxxx">
                  <div className="Pricex">
                    <span>
                      Order Routing <i class="bi bi-question-circle"></i>
                    </span>
                  </div>
                  <div className="Pricex">
                    <span></span>
                  </div>
                </div>
                <div className="Mini-mum Receivedxxx">
                  <div className="Pricex">
                    <span>
                      Estimated Fees <i class="bi bi-question-circle"></i>
                    </span>
                  </div>
                  <div className="Pricex">
                    <span></span>
                  </div>
                </div>
              </div>
              <button type="button" className="Connect-Wallet">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buy;
