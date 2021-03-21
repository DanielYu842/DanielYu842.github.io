import {
  Antd,
  CPP,
  CSS,
  Express,
  EslintLogo,
  Figma,
  Firebase,
  Git,
  HTML,
  Jira,
  JS,
  Less,
  Mongo,
  Netlify,
  Node,
  OpenAPI,
  Photoshop,
  Postman,
  Python,
  ReactLogo,
  ReduxLogo,
  Slack,
  Webpack,
} from "../../Assets/Logos/index";

const frontend = {
  name: "Frontend",
  mainItems: [
    { name: "React", Img: ReactLogo, colour: "#CFF5FF" },
    { name: "Javascript", Img: JS, colour: "#fff5a3" },
  ],
  secondaryItems: [
    [
      { name: "HTML", Img: HTML, colour: "#FFA47C" },
      { name: "CSS", Img: CSS, colour: "#829cff" },
    ],
    [
      { name: "Redux", Img: ReduxLogo, colour: "#c7a7fa" },
      { name: "React Native", Img: ReactLogo, colour: "#CFF5FF" },
    ],
    [
      { name: "Webpack", Img: Webpack, colour: "#abdaff" },
      { name: "Less", Img: Less, colour: "#b2caed" },
    ],
    [
      { name: "Component Libraries", Img: Antd, colour: "#87dfff" },
      { name: "Figma", Img: Figma, colour: "#ffbab3" },
    ],
  ],
};

const backend = {
  name: "Backend",
  mainItems: [
    { name: "Node", Img: Node, colour: "#daebd5" },
    { name: "Express", Img: Express, colour: "#d2d6d9" },
  ],
  secondaryItems: [
    [
      { name: "Firebase", Img: Firebase, colour: "#FFE59C" },
      { name: "MongoDB", Img: Mongo, colour: "#A5F1A8" },
    ],
    [
      { name: "Postman", Img: Postman, colour: "#ffb499" },
      { name: "Python", Img: Python, colour: "#b0d7f7" },
    ],
    [{ name: "C++", Img: CPP, colour: "#b3d8ff" }],
  ],
};

const other = {
  name: "Other",
  mainItems: [
    { name: "Git", Img: Git, colour: "#ffcec4" },
    { name: "Slack", Img: Slack, colour: "#ebebeb" },
  ],
  secondaryItems: [
    [
      { name: "Eslint", Img: EslintLogo, colour: "#bfbfff" },
      { name: "Jira", Img: Jira, colour: "#9cc7ff" },
    ],
    [
      { name: "Photoshop", Img: Photoshop, colour: "#497699" },
      { name: "OpenAPI", Img: OpenAPI, colour: "#e3ffa6" },
    ],
    [{ name: "Netlify", Img: Netlify, colour: "#bffff9" }],
  ],
};

export { frontend, backend, other };
