import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Switch from "@mui/material/Switch";

import { useAppContext } from "../context/state";

const Header = ({ toggleTheme, theme }) => {
  const [data, setData] = useAppContext();
  const [lang, setLang] = useState(data.lang || "en");

  useEffect(() => {
    setData((data) => {
      return {
        ...data,
        lang,
      };
    });
  }, [lang, setData]);

  return (
    <header style={{ backgroundColor: theme === "dark" ? "black" : "" }}>
      <Image src="/catLogo.webp" alt="cat pic" width={200} height={150} />
      <Link href="/">
        <Image
          src="/siteLogo.webp"
          alt="logo of a website"
          width={130}
          height={130}
          className="siteLogo"
        />
      </Link>
      <Switch checked={theme === "dark"} onChange={toggleTheme} />
      <button onClick={() => setLang(lang === "en" ? "fi" : "en")}>
        {lang === "en" ? "🇺🇸" : "🇫🇮"}
      </button>
    </header>
  );
};

export default Header;
