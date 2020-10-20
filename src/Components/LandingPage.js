import React from "react";
import "./LandingPage.css";
import Intro from "./Intro";
import Skills from "./Skills";

function LandingPage() {
  return (
    <div>
      <div className="main-split">
        <div className="left-text">
          <div className="logo_holder">
            <div className="logo_holder__rotate">
              <svg
                className="logo_holder__right"
                enableBackground="new 0 0 94.852 96.499"
                height="96.499px"
                id="Layer_1"
                space="preserve"
                version="1.1"
                viewBox="0 0 94.852 96.499"
                width="94.852px"
                x="0px"
                y="0px"
              >
                <polygon
                  fill="#FFFFFF"
                  points="48.689,0 0,91.806 8.844,96.499 52.842,13.537 81.316,28.635 62.492,63.968 73.908,63.968   94.852,24.482 "
                ></polygon>
              </svg>
              <svg
                className="logo_holder__left"
                enableBackground="new 0 0 94.852 96.499"
                height="96.499px"
                id="Layer_1"
                space="preserve"
                version="1.1"
                viewBox="0 0 94.852 96.499"
                width="94.852px"
                x="0px"
                y="0px"
              >
                <polygon
                  fill="#FFFFFF"
                  points="48.689,0 0,91.806 8.844,96.499 52.842,13.537 81.316,28.635 62.492,63.968 73.908,63.968   94.852,24.482 "
                ></polygon>
              </svg>
            </div>
            <p className="logo_holder__text">Shubham Dholu</p>
            <Intro />
          </div>
        </div>
        <div className="right-picture">
          <div className="swiper-bottom-scrollbar-full swiper-container">
            <div className="swiper-slide width-auto xs-height-auto last-paragraph-no-margin">
              <div className="profile-pic display-block position-relative"></div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default LandingPage;
