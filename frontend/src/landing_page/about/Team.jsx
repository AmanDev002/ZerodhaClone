import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>People</h1>
      </div>

      <div className="row mt-5 p-2 ">
        <div className="col-6 text-center">
          <img
            src="images/nithinKamath.jpg"
            alt="nithinKamath"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-4 fs-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        
        <div className="col-6 p-3 fs-6">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-4">Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>Homepage</a>/
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
