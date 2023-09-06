import { LocationOn, Email, GitHub } from "@mui/icons-material";
import { ReactComponent as LinkedinIcon } from "assets/skils/linkedin.svg";

import {
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
  Link,
  SvgIcon,
} from "@mui/material";
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

export const ContactDataComponent = () => (
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
      <Link
        href="https://www.linkedin.com/in/serhiy-kusyy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgIcon component={LinkedinIcon} fontSize="large" />
      </Link>
      <Link
        href="https://github.com/SAK74"
        color="inherit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub fontSize="large" />
      </Link>
    </Stack>
  </Stack>
);
