import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>Cat Logo</div>
      <Image
        src="/siteLogo.webp"
        alt="logo of a website"
        width={90}
        height={90}
      />
      <div>Dark/Light</div>
      <div>Language</div>
    </header>
  );
};

export default Header;
