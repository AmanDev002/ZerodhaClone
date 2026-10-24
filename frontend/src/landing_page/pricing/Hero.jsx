import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center">
        <h1 className="fs-2">Charges</h1>
        <h4 className="text-muted mt-2 fs-4">List of all charges and taxes</h4>
      </div>

      <div className="row mt-2 text-center p-5">
        <div className="col-4 text-muted">
          <img src="images/pricing0.svg" alt="pricing" className="p-3" />
          <h2 className="text-muted mb-4" >Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-muted">
          <img src="images/intradayTrades.svg" alt="pricing" className="p-3" />
          <h2 className=" mb-4">Free equity delivery</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-muted">
          <img src="images/pricing0.svg" alt="pricing" className="p-3"/>
          <h2 className=" mb-4">Free equity delivery</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
