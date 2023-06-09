import { Card, CardContent, CardHeader, Grid, Paper } from "@mui/material";
import photo from "assets/photo.jpg";

const DESCRIPTION = `   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis purus libero, a pellentesque eros cursus semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean blandit leo eu massa luctus, a iaculis magna placerat. Aliquam vitae purus tempor, mollis ex commodo, pharetra ipsum. Nulla facilisi. Suspendisse purus ex, pharetra dapibus libero at, pulvinar efficitur sem. Ut quis malesuada augue.`;

export const MainPage = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        m: 0,
        rowGap: 2,
      }}
    >
      <Grid
        item
        component={Paper}
        elevation={3}
        xs={2}
        lg={3}
        sx={{
          "&>img": {
            width: "100%",
            borderRadius: "inherit",
          },
          p: 1,
          transform: "rotateZ(-4deg)",
        }}
      >
        <img src={photo} alt="_photo" />
      </Grid>
      <Grid item xs={11} lg={6} sx={{ p: 2 }}>
        <Card>
          <CardHeader title="About Me..." />
          <CardContent sx={{ whiteSpace: "break-spaces" }}>
            {DESCRIPTION}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
