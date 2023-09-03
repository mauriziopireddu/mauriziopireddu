import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://mauriziopireddu.com/",
  author: "Maurizio Pireddu",
  desc: "Maurizio Pireddu is software engineer. He blogs about clean code and dirty motorcycles",
  title: "Maurizio Pireddu",
  ogImage: "avatar.jpg",
  lightAndDarkMode: true,
  postPerPage: 20,
  googleSiteVerification: "DeqQrRF-StG33O_IOy2wdL8vzYeta0yJZ91SlAufieQ",
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://twitter.com/mauriziopireddu",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mauriziopireddu/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/maurizio-pireddu/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/mauriziopireddu",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
];
