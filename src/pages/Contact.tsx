import { Card, Grid, CardHeader, CardContent } from "@mui/material";
import { FormComponent } from "components/contact/Form";
import { ContactDataComponent } from "components/contact/ContactData";

export const Contact = () => {
  return (
    <>
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid item xs={10} lg={5} sm={8}>
          <Card>
            <CardHeader title="Write to me" />
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
