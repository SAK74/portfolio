import { Grid, Typography } from "@mui/material";
import "./skills.css";
import {
  backendSkills,
  envirTools,
  frontendSkills,
  stylingTools,
  tools,
} from "../../data/skills_data";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} component={Typography} variant="subtitle1">
        Frontend:
      </Grid>

      {frontendSkills.map((skill, i) => (
        <Grid item key={skill.name} sx={{}}>
          <Skill {...skill} n={i} />
        </Grid>
      ))}

      <Grid item xs={12} />
      {stylingTools.map((tool, i) => (
        <Grid item key={tool.name}>
          <Skill
            name={tool.name}
            icon={tool.icon}
            n={i + frontendSkills.length}
          />
        </Grid>
      ))}
      <Grid item xs={12} component={Typography} variant="subtitle1">
        Backend:
      </Grid>
      {backendSkills.map((skill, i) => (
        <Grid item key={skill.name} sx={{}}>
          <Skill
            {...skill}
            n={i + frontendSkills.length + stylingTools.length}
          />
        </Grid>
      ))}
      <Grid item xs={12} component={Typography} variant="subtitle1">
        Tools:
      </Grid>
      {tools.map((tool, i) => (
        <Grid item key={tool.name}>
          <Skill
            name={tool.name}
            icon={tool.icon}
            n={
              i +
              frontendSkills.length +
              stylingTools.length +
              backendSkills.length
            }
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
              frontendSkills.length +
              stylingTools.length +
              backendSkills.length +
              tools.length
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};
