import React from "react";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img
            src="images\education.svg"
            alt="education"
            style={{ width: "85%" }}
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading. Varsity
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mb-4 mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
