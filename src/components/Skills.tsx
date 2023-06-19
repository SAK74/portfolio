import { ReactComponent as Angular } from "assets/skils/angular.svg";
import { ReactComponent as Js } from "assets/skils/js.svg";
import jsimage from "assets/skils/js.svg";
import { ReactComponent as Ts } from "assets/skils/ts.svg";
import { ReactComponent as ReactIcon } from "assets/skils/react.svg";
import { ReactComponent as Mui } from "assets/skils/material-ui-1.svg";

import { FC } from "react";
import { SvgIcon, Rating, Stack, Grid } from "@mui/material";

interface SkillType {
  name: string;
  level?: number;
  icon: FC;
}

const skills: SkillType[] = [
  {
    name: "JS",
    icon: Js,
    level: 4,
  },
  {
    name: "React.js",
    level: 4,
    icon: ReactIcon,
  },
];

export const Skills = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Main stack:
      </Grid>
      {skills.map((skill) => (
        <Grid item key={skill.name}>
          <Skill {...skill} />
        </Grid>
      ))}
      <Grid item xs={12}>
        Tools & libraries:
      </Grid>
      {Array(10)
        .fill(1)
        .map((_, i) => (
          <Grid item key={i}>
            <Skill name="as" icon={ReactIcon} />
          </Grid>
        ))}
    </Grid>
  );
};

const Skill: FC<SkillType> = ({ icon, level }) => {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <SvgIcon component={icon} inheritViewBox fontSize="large" />
      {level && <Rating readOnly defaultValue={level} max={5} />}
      {/* <img src={jsimage} alt="js" width={150} /> */}
    </Stack>
  );
};
