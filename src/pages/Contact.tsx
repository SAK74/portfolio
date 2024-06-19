import { Card, Grid, CardHeader, CardContent, Typography } from "@mui/material";
import { FormComponent } from "components/contact/Form";
import { ContactDataComponent } from "components/contact/ContactData";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid item xs={10} lg={5} sm={8}>
          <Card>
            <CardHeader
              sx={{ fontStyle: "italic" }}
              title={t("contact.title") + ":"}
            />
            <CardContent>
              <FormComponent />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <ContactDataComponent />
        </Grid>
      </Grid>
    </>
  );
};
