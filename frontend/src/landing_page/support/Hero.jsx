import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid  bg-primary p-5 ">

      <div className="row mb-5 text-white p-4">
        <div className="col-6 ">
          <h4 className="fs-4">Support Portal</h4>
        </div>
        <div className="col-6">
          <h5>
            <a href="" style={{ color: "white" }}>
              Track Tickets
            </a>
          </h5>
        </div>
      </div>

      <div className="row ">
        <div className="col-6 text-white">
          <p className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </p>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Eg: how do i active F&Q, why is my order getting rejected.."
              style={{ border: "none", padding:'15px' }}
            ></input>
          </div>

          <div className="mx-3">
            <a href="trackAO" style={{ color: "white" }}>
              Track account opening
            </a>{" "}
            &nbsp;
            <a href="trackAO" style={{ color: "white" }}>
              Track segment activation
            </a>{" "}
            &nbsp;
            <a href="trackAO" style={{ color: "white" }}>
              Intraday
            </a>
            <a href="trackAO" style={{ color: "white" }}>
              margins
            </a>
            <a href="trackAO" style={{ color: "white" }}>
              Kits user manual
            </a>
          </div>
        </div>

        <div className="col-6 text-white ">
          <h4>Featured</h4>
          <ol style={{ color: "white" }}>
            <li className="mb-2">
              <a href="" style={{ color: "white" }}>
                Current takeover and Delisting - january 2024
              </a>
            </li>

            <li>
              <a href="" style={{ color: "white" }}>
                Latest Intraday liverages -MIS & CO
              </a>
            </li>
          </ol>
        </div>

      </div>

    </div>
  );
};

export default Hero;
