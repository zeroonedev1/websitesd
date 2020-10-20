import React from "react";
import "./Intro.css";
function Intro() {
  return (
    <div className="Scroll">
      <div className="introduction">
        <div className="line">
          <span className="line-number">1</span>
          <span className="line-content"><p>Hi there</p></span>
        </div>
        <div className="line">
          <span className="line-number">2</span>
          <span className="line-content">
            I'm <mark>Shubham</mark>
          </span>
        </div>
        <div className="line">
          <span className="line-number">3</span>
          <span className="line-content">
            a <mark>front-end engineer</mark> mostly...
          </span>
        </div>
        <div className="line">
          <span className="line-number">3</span>
          <span className="line-content">
             at times..I Develop <mark> Games</mark>
          </span>
        </div>
        <div className="empty-line">
          <div className="line-number line-number-a">4</div>
          <div className="line-number line-number-b">5</div>
          <div className="line-number line-number-c">6</div>
          <div className="line-number line-number-d">7</div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
