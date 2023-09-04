import { Paper, Card, Box, Grid, CardHeader, CardContent } from "@mui/material";
import { FormComponent } from "components/form/Form";

export const Contact = () => {
  return (
    <>
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
        Write to me
        <Card>Contact</Card>
      </Box> */}
      <Grid container>
        <Grid item>
          {/* <FormComponent /> */}
          <Card>
            <CardHeader title="Write to me" />
            <CardContent>
              <FormComponent />
            </CardContent>
          </Card>
          {/* <Paper sx={{ padding: 2 }}>
            <FormComponent />
          </Paper> */}
        </Grid>
      </Grid>
    </>
  );
};
