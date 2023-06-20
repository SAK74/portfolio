import { Grid, Typography } from "@mui/material";
import "./skills.css";
import {
  envirTools,
  skills,
  stylingTools,
  testingTools,
  tools,
} from "./skills_data";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} component={Typography} variant="subtitle1">
        Main stack:
      </Grid>
      {skills.map((skill, i) => (
        <Grid item key={skill.name} sx={{}}>
          <Skill {...skill} n={i} />
        </Grid>
      ))}
      <Grid item xs={12} component={Typography} variant="subtitle1">
        Tools & libraries:
      </Grid>
      {tools.map((tool, i) => (
        <Grid item key={tool.name}>
          <Skill name={tool.name} icon={tool.icon} n={i + skills.length} />
        </Grid>
      ))}
      <Grid item xs={12} />
      {stylingTools.map((tool, i) => (
        <Grid item key={tool.name}>
          <Skill
            name={tool.name}
            icon={tool.icon}
            n={i + skills.length + tools.length}
          />
        </Grid>
      ))}
      <Grid item xs={12} />
      {testingTools.map((tool, i) => (
        <Grid item key={tool.name}>
          <Skill
            name={tool.name}
            icon={tool.icon}
            n={i + skills.length + tools.length + stylingTools.length}
          />
        </Grid>
      ))}
      <Grid item xs={12} />
      {envirTools.map((tool, i) => (
        <Grid item key={tool.name}>
          <Skill
            name={tool.name}
            icon={tool.icon}
            n={
              i +
              skills.length +
              tools.length +
              stylingTools.length +
              testingTools.length
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};
