import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 text-center">
        <img src="images/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-4">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, IPOs, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 "
          style={{ width: "20%", margin: "0 auto" }}
        >

          <Link to="/signup" style={{textDecoration:"none", color:"white"}}>Signup Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
