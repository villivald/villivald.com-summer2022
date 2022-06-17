import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>
          <FormattedMessage id="contacts" />
        </h3>
      </div>
      <div>
        <h3>
          <FormattedMessage id="copyright" />
        </h3>
      </div>
      <div>
        <h3>
          <FormattedMessage id="social" />
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
