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
import { ReactComponent as NextIcon } from "assets/skils/next_1.svg";
import { ReactComponent as WebpackIcon } from "assets/skils/webpack.svg";
import { ReactComponent as VSC } from "assets/skils/Visual_Studio_Code_1.35_icon.svg";
import { ReactComponent as Jest } from "assets/skils/jest.svg";
import { ReactComponent as ReactTestingLibraryIcon } from "assets/skils/testing-library.svg";
import { ReactComponent as Figma } from "assets/skils/figma.svg";
import { ReactComponent as Photoshop } from "assets/skils/photoshop.svg";

import { GitHub as GhIcon } from "@mui/icons-material";
import { FC } from "react";

export interface SkillType {
  name: string;
  level?: number;
  icon: FC;
}

export const skills: SkillType[] = [
  { name: "HTML 5", icon: HTML, level: 4 },
  { name: "CSS 3", icon: CSS, level: 4 },

  {
    name: "JavaScript",
    icon: Js,
    level: 4,
  },
  {
    name: "React.js",
    level: 4,
    icon: ReactIcon,
  },
  { name: "TypeScript", icon: Ts, level: 4 },
  {
    name: "Angular",
    level: 3,
    icon: Angular,
  },
  {
    name: "Node.js",
    level: 2.5,
    icon: NodeIcon,
  },
];

export const tools: SkillType[] = [
  {
    name: "Redux",
    icon: Redux,
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
    name: "Webpack",
    icon: WebpackIcon,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
];

export const stylingTools: SkillType[] = [
  {
    name: "Material UI",
    icon: Mui,
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
export const testingTools: SkillType[] = [
  {
    name: "Jest",
    icon: Jest,
  },
  {
    name: "React-testing-library",
    icon: ReactTestingLibraryIcon,
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
