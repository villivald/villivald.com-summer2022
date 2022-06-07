import React from "react";

const Skillbox = () => {
  const skills = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
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
            <div className="skill" key={skill}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillbox;
