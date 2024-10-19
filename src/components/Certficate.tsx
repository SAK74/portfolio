import {
  Box,
  Chip,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import { CertyficateType } from "data/certyficates";
import type { FC } from "react";
import { IconFromUrl } from "utils/IconFromUrl";
import { Visibility } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export const Certyficate: FC<CertyficateType> = ({
  title,
  issuer: { logo, link, name },
  pdfLink,
  issue,
  skills,
}) => {
  const avatar = (
    <Link href={link} target="_blank">
      {typeof logo === "string" ? (
        <IconFromUrl url={logo} fontSize="large" />
      ) : (
        <SvgIcon component={logo} inheritViewBox fontSize="large" />
      )}
    </Link>
  );

  const { t } = useTranslation();

  return (
    <ListItem dense divider>
      <ListItemAvatar>{avatar}</ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ variant: "h6" }}
        primary={
          <>
            {title}
            <Typography>{name}</Typography>
          </>
        }
        secondaryTypographyProps={{ variantMapping: { body2: "div" } }}
        secondary={
          <>
            {`issued ${issue.toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
            })}`}
            <Box>
              {skills?.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  size="small"
                  color="success"
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>
          </>
        }
      ></ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title={t("certyficates.tooltip")}>
          <IconButton edge="end">
            <Link href={pdfLink} target="_blank">
              <Visibility color="action" />
            </Link>
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
