import React from "react";
import SingleSkill from "./subComponents/SingleSkill";
import PercentBar from "./subComponents/PercentBar";

const Skillbox = () => {
  const skills = [
    "html",
    "css",
    "javascript",
    "react",
    "next",
    "mongo",
    "linux",
    "git",
    "github",
    "terminal",
    "redux",
    "docker",
  ];
  return (
    <div className="skillbox">
      <div>
        <h3>Study</h3>
        <div className="studyContainer">
          <div>
            Bachelor of Engineering, Software engineering (2019 ~ 2023) -
            190/240 ECTS
          </div>
          <PercentBar percent={79} />
          <div>Master of Arts, Russian literature (2011 - 2015) - 300 ECTS</div>
          <PercentBar percent={100} />
        </div>
      </div>
      <div>
        <h3>Skills</h3>
        <div className="skillsContainer">
          {skills.map((skill) => (
            <SingleSkill key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillbox;
