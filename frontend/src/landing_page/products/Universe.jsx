import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-3 mb-4 text-muted">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 ">
          <img
            src="images/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{ width: "60%" }}
          />
          <p className="fs-6 text-muted"> Assest management</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="images/sensibullLogo.svg"
            alt="sensibullLogo"
            style={{ width: "60%" }}
          />
          <p className="fs-6 text-muted">Option trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="images/smallcaseLogo.png"
            alt="smallcaseLogo"
            style={{ width: "60%" }}
          />
          <p className="fs-6 text-muted">Thematic investing platform </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img
            src="images/streakLogo.png"
            alt="streakLogo"
            style={{ width: "60%" }}
          />
          <p className="fs-6 text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="images/goldenpiLogo.png"
            alt="sensibullLogo"
            style={{ width: "60%" }}
          />
          <p className="fs-6 text-muted">Bonds Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="images/dittoLogo.png"
            alt="smallcaseLogo"
            style={{ width: "50%" }}
          />
          <p className="fs-6 text-muted">Insurance</p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mt-5 "
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
