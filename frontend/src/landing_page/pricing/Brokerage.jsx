import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3>Brokerage Calculator</h3>
          </a>
          <ul
            className="text-muted p-3"
            style={{ lineHeight: "2.5", textAlign: "left", fontSize: "15px" }}
          >
            <li>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha.
            </li>
            <li>
              Accounts with a debit balance will be charged an additional ₹20
              per executed order.
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
            <li>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </li>
            <li>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3>List of Charges</h3>
          </a>

          <ul
            className="text-muted p-3"
            style={{ lineHeight: "2.5", textAlign: "left", fontSize: "15px" }}
          >
            <li>Free: 0 | Pro: 249/699/2399.</li>
            <li>Buy & Invest More: 100 | SIP: 10</li>

            <li>Connect: 500 | Personal: Free</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
