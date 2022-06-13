import React from "react";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();
  const menuButtons = ["projects", "uses", "books", "studies", "about"];
  return (
    <div className="menu">
      {menuButtons.map((button) => (
        <button
          key={button}
          className="menuButton"
          onClick={() => router.push(`/${button}`)}
        >
          {button}
        </button>
      ))}
      <div>CMD + K</div>
    </div>
  );
};

export default Menu;
