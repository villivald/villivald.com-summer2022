import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Image src="/catLogo.webp" alt="cat pic" width={200} height={150} />
      <Link href="/">
        <Image
          src="/siteLogo.webp"
          alt="logo of a website"
          width={90}
          height={90}
          className="siteLogo"
        />
      </Link>
      <div>Dark/Light</div>
      <button>FI</button>
    </header>
  );
};

export default Header;
