import { ReactComponent as Angular } from "assets/skils/angular.svg";
import { ReactComponent as Js } from "assets/skils/js.svg";
import { ReactComponent as Ts } from "assets/skils/ts.svg";
import { ReactComponent as ReactIcon } from "assets/skils/react.svg";
import { ReactComponent as Mui } from "assets/skils/material-ui-1.svg";
import { ReactComponent as HTML } from "assets/skils/html5.svg";
import { ReactComponent as CSS } from "assets/skils/css3.svg";
import { ReactComponent as NodeIcon } from "assets/skils/Node.js_logo.svg";
import { ReactComponent as Redux } from "assets/skils/redux.svg";
import { ReactComponent as RestIcon } from "assets/skils/rest_api.svg";
import { ReactComponent as StyledComps } from "assets/skils/styled-components-1.svg";
import { ReactComponent as Tailwind } from "assets/skils/tailwind.svg";
import { ReactComponent as Sass } from "assets/skils/sass.svg";
import { ReactComponent as GraphQl } from "assets/skils/GraphQL_Logo.svg";
import { ReactComponent as GitIcon } from "assets/skils/git.svg";
import { ReactComponent as ExpressIcon } from "assets/skils/express.svg";
import { ReactComponent as NextIcon } from "assets/skils/next.svg";
import { ReactComponent as WebpackIcon } from "assets/skils/webpack.svg";
import { ReactComponent as VSC } from "assets/skils/Visual_Studio_Code_1.35_icon.svg";
import { ReactComponent as Jest } from "assets/skils/jest.svg";
import { ReactComponent as ReactTestingLibraryIcon } from "assets/skils/testing-library.svg";
import { ReactComponent as Figma } from "assets/skils/figma.svg";
import { ReactComponent as Photoshop } from "assets/skils/photoshop.svg";
import { ReactComponent as AngularMaterial } from "assets/skils/angular-material.svg";
import { ReactComponent as Cypress } from "assets/skils/cypress.svg";
import { ReactComponent as Firebase } from "assets/skils/firebase.svg";
import { ReactComponent as NestJs } from "assets/skils/NestJS.svg";
import { ReactComponent as Prisma } from "assets/skils/prisma.svg";
import { ReactComponent as Rxjs } from "assets/skils/rxjs.svg";
import { ReactComponent as Vite } from "assets/skils/vite.svg";
import { ReactComponent as Docker } from "assets/skils/docker.svg";

import { GitHub as GhIcon } from "@mui/icons-material";
import { FC } from "react";

export interface SkillType {
  name: string;
  level?: number;
  icon: FC;
}

export const frontendSkills: SkillType[] = [
  { name: "HTML 5", icon: HTML, level: 4 },
  { name: "CSS 3", icon: CSS, level: 4 },

  {
    name: "JavaScript",
    icon: Js,
    level: 4,
  },
  { name: "TypeScript", icon: Ts, level: 4 },

  {
    name: "React.js",
    level: 4,
    icon: ReactIcon,
  },

  {
    name: "Angular",
    level: 3,
    icon: Angular,
  },
  {
    name: "Redux",
    icon: Redux,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
  {
    name: "RxJs",
    icon: Rxjs,
  },
];

export const stylingTools: SkillType[] = [
  {
    name: "Material UI",
    icon: Mui,
  },
  {
    name: "Angular Material UI",
    icon: AngularMaterial,
  },

  {
    name: "Sass",
    icon: Sass,
  },
  {
    name: "Styled Components",
    icon: StyledComps,
  },
  {
    name: "Tailwind",
    icon: Tailwind,
  },
];

export const backendSkills: SkillType[] = [
  {
    name: "Node.js",
    level: 3,
    icon: NodeIcon,
  },
  {
    name: "Rest API",
    icon: RestIcon,
  },
  {
    name: "GraphQL",
    icon: GraphQl,
  },
  {
    name: "Express.js",
    icon: ExpressIcon,
  },
  {
    name: "NestJs",
    icon: NestJs,
  },
  {
    name: "Prisma",
    icon: Prisma,
  },
];

export const tools: SkillType[] = [
  {
    name: "Webpack",
    icon: WebpackIcon,
  },
  {
    name: "Vite",
    icon: Vite,
  },
  {
    name: "Docker",
    icon: Docker,
  },
  {
    name: "Jest",
    icon: Jest,
  },
  {
    name: "React-testing-library",
    icon: ReactTestingLibraryIcon,
  },
  {
    name: "Cypress",
    icon: Cypress,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
];

export const envirTools: SkillType[] = [
  {
    name: "Git",
    icon: GitIcon,
  },

  {
    name: "Github",
    icon: GhIcon,
  },
  {
    name: "Visual Studio Code",
    icon: VSC,
  },
  {
    name: "Figma",
    icon: Figma,
  },
  {
    name: "Photoshop",
    icon: Photoshop,
  },
];
