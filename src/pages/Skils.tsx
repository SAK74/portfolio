import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import { Skills } from "components/Skills";

export const Skils = () => {
  return (
    <>
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid item xs={7}>
          <Skills />
        </Grid>
        <Grid item>
          <Card elevation={3}>
            <CardHeader title="Description" />
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
