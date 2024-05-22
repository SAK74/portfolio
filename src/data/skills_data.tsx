import * as Icon from "icons";

import { GitHub as GhIcon } from "@mui/icons-material";
import { FC } from "react";

export interface SkillType {
  name: string;
  level?: number;
  icon: FC;
}

export const frontendSkills: SkillType[] = [
  { name: "HTML 5", icon: Icon.HTML, level: 4 },
  { name: "CSS 3", icon: Icon.CSS, level: 4 },

  {
    name: "JavaScript",
    icon: Icon.Js,
    level: 4,
  },
  { name: "TypeScript", icon: Icon.Ts, level: 4 },

  {
    name: "React.js",
    level: 4,
    icon: Icon.ReactIcon,
  },

  {
    name: "Angular",
    level: 3.5,
    icon: Icon.Angular,
  },
  {
    name: "Redux",
    icon: Icon.Redux,
  },
  {
    name: "Next.js",
    icon: Icon.NextIcon,
  },
  {
    name: "RxJs",
    icon: Icon.Rxjs,
  },
];

export const stylingTools: SkillType[] = [
  {
    name: "Material UI",
    icon: Icon.Mui,
  },
  {
    name: "Tailwind",
    icon: Icon.Tailwind,
  },
  {
    name: "Angular Material UI",
    icon: Icon.AngularMaterial,
  },

  {
    name: "Sass",
    icon: Icon.Sass,
  },
  {
    name: "Styled Components",
    icon: Icon.StyledComps,
  },
];

export const backendSkills: SkillType[] = [
  {
    name: "Node.js",
    level: 3.0,
    icon: Icon.NodeIcon,
  },
  {
    name: "Rest API",
    icon: Icon.RestIcon,
  },
  {
    name: "GraphQL",
    icon: Icon.GraphQl,
  },
  {
    name: "Express.js",
    icon: Icon.ExpressIcon,
  },
  {
    name: "NestJs",
    icon: Icon.NestJs,
  },
  {
    name: "Prisma",
    icon: Icon.Prisma,
  },
  {
    name: "AWS Cloud",
    icon: Icon.Aws,
  },
];

export const tools: SkillType[] = [
  {
    name: "Webpack",
    icon: Icon.WebpackIcon,
  },
  {
    name: "Vite",
    icon: Icon.Vite,
  },
  {
    name: "Docker",
    icon: Icon.Docker,
  },
  {
    name: "Jest",
    icon: Icon.Jest,
  },
  {
    name: "React-testing-library",
    icon: Icon.ReactTestingLibraryIcon,
  },
  {
    name: "Cypress",
    icon: Icon.Cypress,
  },
  {
    name: "Firebase",
    icon: Icon.Firebase,
  },
];

export const envirTools: SkillType[] = [
  {
    name: "Git",
    icon: Icon.GitIcon,
  },

  {
    name: "Github",
    icon: GhIcon,
  },
  {
    name: "Visual Studio Code",
    icon: Icon.VSC,
  },
  {
    name: "Figma",
    icon: Icon.Figma,
  },
  {
    name: "Photoshop",
    icon: Icon.Photoshop,
  },
];
