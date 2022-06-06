import React from "react";

const Menu = () => {
  const menuButtons = [
    "projects",
    "uses",
    "books",
    "courses",
    "about",
    "contact",
  ];
  return (
    <div className="menu">
      {menuButtons.map((button) => (
        <button key={button} className="menuButton">
          {button}
        </button>
      ))}
      <div>CMD + K</div>
    </div>
  );
};

export default Menu;
