import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  Stack,
  Typography,
  SvgIcon,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import { FormComponent } from "components/form/Form";
import { ReactComponent as LinkedinIcon } from "assets/skils/linkedin.svg";
import { GitHub, LocationOn, Email } from "@mui/icons-material";
import personals from "data/personals";

const EmailComponent = styled(Typography)({
  cursor: "pointer",
  "&:hover": {
    fontStyle: "italic",
  },
});

const sendMail = () => {
  window.open(`mailto:${personals.email}`);
};

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
          <Stack spacing={5}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary={personals.adress} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <EmailComponent
                      children={personals.email}
                      onClick={() => sendMail()}
                    />
                  }
                />
              </ListItem>
            </List>
            <Stack direction={"row"} spacing={8} sx={{ alignSelf: "center" }}>
              <Link href="https://www.linkedin.com/in/serhiy-kusyy/">
                <SvgIcon component={LinkedinIcon} fontSize="large" />
              </Link>
              <Link href="https://github.com/SAK74" color="inherit">
                <GitHub fontSize="large" />
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
