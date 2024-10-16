import { Box, Grid, Typography } from "@mui/material";
import "./skills.css";
import {
  backendSkills,
  envirTools,
  frontendSkills,
  stylingTools,
  tools,
} from "../../data/skills_data";
import { Skill } from "./Skill";
import type { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid item xs={12} component={Typography} variant="h6">
      <Box sx={{ mt: 1 }}>{children}:</Box>
    </Grid>
  );
};

export const Skills = () => {
  return (
    <Grid container spacing={2}>
      <Title>Frontend</Title>

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
      <Title>Backend</Title>
      {backendSkills.map((skill, i) => (
        <Grid item key={skill.name} sx={{}}>
          <Skill
            {...skill}
            n={i + frontendSkills.length + stylingTools.length}
          />
        </Grid>
      ))}
      <Title>Tools</Title>
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
