import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="app-footer bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4 text-center">
            <a href="#">
              <img
                src="https://logopond.com/logos/764befce2161b53b5895108e1e8597d7.png"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-4">
                <h5 className="text-white">Features</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Link Shortening
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Branded Links
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Analytics
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h5 className="text-white">Resources</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h5 className="text-white">Company</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <a href="#" className="text-white me-3">
              <img src={facebookIcon} alt="Facebook page" />
            </a>
            <a href="#" className="text-white me-3">
              <img src={twitterIcon} alt="Twitter page" />
            </a>
            <a href="#" className="text-white me-3">
              <img src={pinterestIcon} alt="Pinterest page" />
            </a>
            <a href="#" className="text-white">
              <img src={instagramIcon} alt="Instagram page" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
