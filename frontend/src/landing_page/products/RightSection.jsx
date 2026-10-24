import React from "react";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  
}) => {
  return (
    <div className="container mt-5">
      <div className="row text-muted">
        <div className="col-6  mt-5 p-5">
          <h1 className="fs-3 mt-5">{productName}</h1>
          <p className="fs-6 mt-3">{productDescription}</p>

          <div>
            <a href={learnMore}>
              {learnMore} <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-6 ">
          <img src={imageUrl} alt="" style={{width:"100%"}}  />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
