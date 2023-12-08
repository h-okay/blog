import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.hakanokay.dev",
  author: "Hakan Okay",
  desc: "Code snippets, articles about software development, data science/engineering.",
  title: "okay.blog()",
  //ogImage: "astropaper-og.jpg", TODO: add an og image
  lightAndDarkMode: true,
  postPerPage: 6,
};

export const LOCALE = ["en-EN"];

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/h-okay",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hakan-okay",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hokay.ca@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
];
