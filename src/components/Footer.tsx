import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="footer-section">
            <a className="logo" href="#">
              <svg
                role="img"
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="#FF6719"
                stroke-width="1"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-logo-icon"
              >
                <g>
                  <title></title>
                  <path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path>
                  <path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path>
                  <path d="M20.9991 0H0V2.83603H20.9991V0Z"></path>
                </g>
              </svg>
            </a>

            <ul className="icons">
              <li>
                <a href="#">
                  <i className="ion-social-facebook-outline"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-twitter-outline"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-instagram-outline"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-vimeo-outline"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-pinterest-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row-subscribe">
          <div className="footer-section">
            <h4 className="footer-section-title">
              <b>SUBSCRIBE</b>
            </h4>
            <div className="footer-section-input-area">
              <form>
                <input
                  className="footer-section-input-area-email-input"
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  className="input-area-email-input-submit-btn"
                  type="submit"
                >
                  <i className="icon ion-ios-email-outline"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
