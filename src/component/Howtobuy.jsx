import React, { useState } from "react";
import logox from "../images/logonv.png";
import xxdv from "../images/md.gif";

function Howtobuy() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState("Click to copy");

  const textToCopy = "ChdmQWpzHsdgNvBjD2cMftz9bYmEBuX4v6GUQnSw4Xgq";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setTooltipText("Copied!");
        setTooltipVisible(true);
        setTimeout(() => {
          setTooltipVisible(false);
          setTooltipText("Click to copy");
        }, 2000); // Hide tooltip after 2 seconds
      },
      (err) => {
        setTooltipText("Failed to copy");
        setTooltipVisible(true);
        console.error("Failed to copy text: ", err);
      }
    );
  };
  return (
    <section className="extension" id="How">
      <div className="Howtobuyx">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="buHowy"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <h3>
                  How to buy
                  <span>
                    <img
                      src={logox}
                      className="img-fluid ses"
                      alt="How to buy"
                    />
                  </span>
                  <div className="xwaa">
                    <img src={xxdv} className="img-fluid" alt="How to buy" />
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <h3 className="SOLANAs">ON A (SOLANA) DEX</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
            <div className="Phantom">
              <h4>
                <span>01.</span>Create a wallet
              </h4>
              <p>
                If you are on mobile, install Phantom, Solflare Wallet, or the
                Solana wallet of your choice from the Apple App Store (iOS) or
                Google Play Store (Android). If you are on a computer, download
                the Phantom wallet extension from a compatible browser (Mozilla
                Firefox or Google Chrome for example) at https://phantom.app; or
                https://solflare.com for Solflare - for any other wallet, please
                refer to the official instructions on the website of the wallet
                of your choice. Then create your wallet by strictly following
                the instructions.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
            <div className="Phantom">
              <h4>
                <span>02.</span>Buy/have some SOL
              </h4>
              <p>
                Buy/have some SOL (main coin of the Solana chain) in your
                wallet, it's mandatory for any transaction on the Solana
                network. If you don’t have any SOL, you can buy it directly from
                Phantom or Solflare using your bank card; you can also transfer
                it from another wallet, or buy it on a centralized exchange
                platform (CEX), such as Binance, Coinbase, OKX, Kraken or Kukoin
                for example, and send it to your wallet.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
            <div className="Phantom">
              <h4>
                <span>03.</span>Go to Raydium Protocol (DEX)
              </h4>
              <p>
                Log in to Raydium by going to this link: https://raydium.io/swap
                - (or go to the Solana DEX of your choice). You can access it in
                your browser (compatible with your wallet) or on the DeFi Web3
                browser of your Phantom or Solflare Wallet application (or
                other). Then connect your wallet. Select SOL (or any other
                token) in the "From" part, and paste the official Token ID of
                BUGS coin (below) in the "To" part. Select BUGS and confirm.
                Then check all the swap parameters, and how many BUGS do you
                want to get. Make sure you have enough SOL in your wallet to be
                able to pay the (very low) network gas fees.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
            <div className="Phantom">
              <h4>
                <span>04.</span>Swap for BUGS 🐰
              </h4>
              <p>
                Swap SOL/any other token for BUGS. Regarding slippage, please
                note that BUGS has no buying or selling fees. Then approve the
                transaction in your wallet and wait a few seconds/minutes. You
                will quickly receive a prompt that your transaction has been
                sent. And it's good! Congratulations, you are now a BUGS Holder!
                Finally, disconnect your wallet from the Raydium dApp/or DEX of
                your choice as a security measure. Welcome to the Bugs Community
                ❤️
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="BUGS-Token-ID copy-container">
              <span className="Token">$BUGS Token ID:</span>
              <span>ChdmQWpzHsdgNvBjD2cMftz9bYmEBuX4v6GUQnSw4Xgq</span>
              {tooltipVisible && <div className="tooltip">{tooltipText}</div>}
              <button onClick={copyToClipboard}>COPY</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howtobuy;
