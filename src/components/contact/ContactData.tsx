import { LocationOn, Email, GitHub } from "@mui/icons-material";

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
import { MediaBar } from "components/MediaBar";
import personals from "data/personals";
import { LinkedinIcon } from "icons";

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
    <MediaBar />
  </Stack>
);
