import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "../context/state";
import { FormattedMessage } from "react-intl";

const Header = () => {
  const [data, setData] = useAppContext();
  const [lang, setLang] = useState("fi");

  useEffect(() => {
    setData((data) => {
      return {
        ...data,
        lang,
      };
    });
  }, [lang, setData]);
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
      <div>
        <FormattedMessage id="someData" />
      </div>
      <button onClick={() => setLang(lang === "en" ? "fi" : "en")}>
        {lang === "en" ? "🇺🇸" : "🇫🇮"}
      </button>
    </header>
  );
};

export default Header;
