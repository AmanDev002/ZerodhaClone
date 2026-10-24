import React from "react";

const Footer = () => {
  return (
    <footer style={{backgroundColor : "rgb(240, 240, 240)"}}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="images/logo.svg" alt="logo" style={{ width: "50%" }} />
            <p>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col all-anchor">
            <p>Account</p>
            <a href="" >Open demat account</a>
            <br />
            <a href="">Minor demat account</a>
            <br />
            <a href="">NRI demat account</a>
            <br />
            <a href="">HUF demat account</a>
            <br />
            <a href="">Commodity</a>
            <br />
            <a href="">Dematerialisation</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">MTF</a>
            <br />
          </div>
          <div className="col all-anchor">
            <p>Support</p>

            <a href="">Contact us</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href="">Bulletin</a>
            <br />
            <a href="">Circular</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">Downloads</a>
            <br />
          </div>
          <div className="col all-anchor">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Philosophy</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Zerodha Cares (CSR)</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Open source</a>
            <br />
            <a href="">Referral program</a>
            <br />
          </div>
        </div>
        <div className="mt-5 fs-6 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Limited – SEBI Registration no.:
            IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address:
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on
            SCORES portal & SMARTODR. Mandatory details for filing complaints on
            SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism |
            Project Jagrook by SEBI
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            {" "}
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
