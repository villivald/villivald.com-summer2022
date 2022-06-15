import React from "react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

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
          <FormattedMessage id={button} />
        </button>
      ))}
      <div>CMD + K</div>
    </div>
  );
};

export default Menu;
