import React from "react";
import SingleSkill from "./SingleSkill";

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
          <div></div>
          <div></div>
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
