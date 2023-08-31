import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import { Skills } from "components/skills/Skills";
import { useTranslation } from "react-i18next";

export const SkillsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid item xs={6}>
          <Skills />
        </Grid>
        <Grid item xs={5}>
          <Card elevation={3}>
            <CardHeader title={t("skils.title")} />
            <CardContent sx={{ whiteSpace: "break-spaces" }}>
              {t("skils.description")}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
