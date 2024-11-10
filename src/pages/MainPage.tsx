import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Stack,
  type Theme,
  useMediaQuery,
} from "@mui/material";
import photo from "assets/photo.jpg";
import "./main-page.css";
import { useTranslation } from "react-i18next";
import { MediaBar } from "components/MediaBar";

export const MainPage = () => {
  const { t } = useTranslation();
  const isLessThenMd = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md")
  );
  const showPhotoInText = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.between("sm", "md")
  );
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
      {!isLessThenMd && (
        <Grid item xs={2} md={2}>
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
      )}

      <Grid item xs={11} md={6}>
        <Box>
          <Card>
            <CardHeader
              title={t("about.title")}
              sx={{ textAlign: "center" }}
              subheader={isLessThenMd && <MediaBar />}
              subheaderTypographyProps={{ ...(isLessThenMd && { mt: 2 }) }}
            />
            <CardContent sx={{ whiteSpace: "break-spaces" }}>
              {showPhotoInText && (
                <Box
                  sx={{
                    float: "left",
                    mr: 2,
                    clipPath: "ellipse(40% 40%)",
                  }}
                >
                  <img src={photo} alt="" width={150} />
                </Box>
              )}
              {t("about.description").replace(":)", "\uD83D\uDE03")}
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
