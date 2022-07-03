import React from "react";
import { FormattedMessage } from "react-intl";

import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <div className="footerInnerGrid">
        <h3>
          <FormattedMessage id="contacts" />
        </h3>
        <div>
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="footerInnerGrid">
        <h3>
          <FormattedMessage id="copyright" />
        </h3>
        <div>© villivald 2022</div>
      </div>
      <div className="footerInnerGrid">
        <h3>
          <FormattedMessage id="social" />
        </h3>
        <div>
          <TwitterIcon />
          <TelegramIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
