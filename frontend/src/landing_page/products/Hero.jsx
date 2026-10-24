import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5">
        <h1 className="fs-2">Zerodha Products</h1>
        <h4 className="text-muted mt-3">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="mt-3 fs-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
