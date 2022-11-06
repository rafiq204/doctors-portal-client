import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      className=" p-10 "
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
    >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <a className="link link-hover">New York-101010 Hudson</a>
        
        </div>
      </div>

      <footer className="footer footer-center p-4  text-base-content">
        <div className="mt-10">
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
