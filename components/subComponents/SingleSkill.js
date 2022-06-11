import React from "react";
import Image from "next/image";

const SingleSkill = ({ skill }) => {
  return (
    <Image
      src={`/skillsIcons/${skill}.svg`}
      alt={skill}
      height={50}
      width={50}
    />
  );
};

export default SingleSkill;
