import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills-body">
      <div className="skills-parent">
        <div className="child">
          <div className="artist one"></div>
          <div className="skill-name">
            HTML<br></br>
            CSS<br></br>
            Js<br></br>
          </div>
        </div>

        <div className="child">
          <div className="artist two"></div>
          <div className="skill-name">
            Responsive web<br></br>
            development<br></br>
          </div>
        </div>

        <div className="child">
          <div className="artist three"></div>
          <div className="skill-name">
            Frameworks<br></br>
            React<br></br>
            Vue.js<br></br>
          </div>
        </div>

        </div>
      <div className="skills-parent">


        <div className="child">
          <div className="artist four"></div>
          <div className="skill-name">
            Rest API<br></br>
            Fetch<br></br>
            Axios<br></br>
          </div>
        </div>

        <div className="child">
          <div className="artist five"></div>
          <div className="skill-name">
            Version Control<br></br>
            Git<br></br>
            Github<br></br>
          </div>
        </div>

        <div className="child">
          <div className="artist six"></div>
          <div className="skill-name">
            Misc<br></br>
            Unity Game Engine<br></br>
            C#<br></br>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Skills;
