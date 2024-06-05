import React from "react";

import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { GoDownload } from "react-icons/go";

const socialData = [
  {
    link: "https://github.com/rahulgajbhiye201",
    icon: React.createElement(FaGithub),
    name: "Github",
  },
  {
    link: "https://www.linkedin.com/in/rahulgajbhiye201",
    icon: React.createElement(FaLinkedin),
    name: "LinkedIn",
  },

  {
    link: "https://twitter.com/rahulgajbhiye01",
    icon: React.createElement(FaSquareXTwitter),
    name: "Twitter",
  },
  {
    link: "https://drive.google.com/file/d/1SEnGoJ-Qi0zSisBEGMUxJ2fjGugZzc_9/view?usp=drive_link",
    icon: React.createElement(GoDownload),
    name: "Resume",
  },
];

export default socialData;
