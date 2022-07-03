import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

  const handleChange = (event) => {
    setLang(event.target.value);
  };

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

      <div className="themeSwitcher">
        <LightModeIcon style={{ color: theme === "dark" ? "white" : "" }} />
        <Switch checked={theme === "dark"} onChange={toggleTheme} />
        <NightlightIcon style={{ color: theme === "dark" ? "white" : "" }} />
      </div>
      {/* <button onClick={() => setLang(lang === "en" ? "fi" : "en")}>
        {lang === "en" ? "🇺🇸" : "🇫🇮"}
      </button> */}
      <Select
        value={lang}
        onChange={handleChange}
        autoWidth
        label="Age"
        IconComponent={ArrowDropDownIcon}
        variant="standard"
      >
        <MenuItem value={"en"}>🇺🇸 EN</MenuItem>
        <MenuItem value={"fi"}>🇫🇮 FI</MenuItem>
      </Select>
    </header>
  );
};

export default Header;
