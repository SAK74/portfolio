import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import { Skills } from "components/skills/Skills";
import { DESCRIPTION } from "./MainPage";

export const SkillsPage = () => {
  return (
    <>
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid item xs={6}>
          <Skills />
        </Grid>
        <Grid item xs={5}>
          <Card elevation={3}>
            <CardHeader title="Description" />
            <CardContent>{DESCRIPTION}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
