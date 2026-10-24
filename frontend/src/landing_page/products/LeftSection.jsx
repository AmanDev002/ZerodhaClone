import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5  ">
      <div className="row text-muted">
        <div className="col-6 p-5 ">
          <img src={imageUrl} alt="" style={{ width: "95%" }} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1 className="fs-2">{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo} className="mx-4">
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3  ">
            <a href={googlePlay}>
              <img src="images\googlePlayBadge.svg" alt="google play" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="images\appstoreBadge.svg" alt="appstore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
