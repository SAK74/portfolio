import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import photo from "assets/photo.jpg";
import "./main-page.css";
import { useTranslation } from "react-i18next";
import { MediaBar } from "components/MediaBar";

export const MainPage = () => {
  const { t } = useTranslation();
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
      <Grid item xs={2} lg={2}>
        <Stack
          sx={{
            "& img": {
              width: "100%",
              borderRadius: "inherit",
            },
          }}
          spacing={6}
        >
          <Paper
            sx={{
              p: 0.5,
              transform: "rotateZ(-4deg)",
            }}
          >
            <img src={photo} alt="_photo" />
          </Paper>
          <MediaBar />
        </Stack>
      </Grid>

      <Grid item xs={11} lg={6}>
        <Card>
          <CardHeader title={t("about.title")} />
          <CardContent sx={{ whiteSpace: "break-spaces" }}>
            {t("about.description").replace(":)", "\uD83D\uDE03")}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
