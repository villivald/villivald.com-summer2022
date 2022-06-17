import React from "react";
import { FormattedMessage } from "react-intl";

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
        <h3>
          <FormattedMessage id="studies" />
        </h3>
        <div className="studyContainer">
          <div>
            <FormattedMessage id="bachelor" />
            (2019 ~ 2023) - 190/240
            <FormattedMessage id="ects" />
          </div>
          <PercentBar percent={79} />
          <div>
            <FormattedMessage id="master" />
            (2011 - 2015) - 300
            <FormattedMessage id="ects" />
          </div>
          <PercentBar percent={100} />
        </div>
      </div>
      <div>
        <h3>
          <FormattedMessage id="skills" />
        </h3>
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
