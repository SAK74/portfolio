import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Stack,
  styled,
  SvgIcon,
  Tooltip,
} from "@mui/material";
import {
  AccessTime as TimeIcon,
  GitHub as GhIcon,
  Link as LinkIcon,
} from "@mui/icons-material";
import { Languages, ProjectType } from "projects";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Angular } from "assets/skils/angular.svg";
import { ReactComponent as Js } from "assets/skils/js.svg";
import { ReactComponent as Ts } from "assets/skils/ts.svg";
import { ReactComponent as ReactIcon } from "assets/skils/react.svg";
import { ReactComponent as Mui } from "assets/skils/material-ui-1.svg";

const matched: { [Prop in Languages]: FC } = {
  angular: Angular,
  js: Js,
  ts: Ts,
  react: ReactIcon,
  mui: Mui,
};

const StyledCard = styled(Card)(({ theme }) => ({}));

export const ProjectCard: FC<ProjectType> = ({
  name,
  image,
  languages,
  dateCreated,
  gh_link,
  deploy,
}) => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <StyledCard sx={{ width: { lg: 300 } }} elevation={5}>
      <CardHeader
        title={name}
        titleTypographyProps={{ variant: "body1" }}
        action={languages.map((language) => (
          <SvgIcon
            key={language}
            component={matched[language]}
            inheritViewBox
          />
        ))}
        subheader={
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ alignItems: "flex-end" }}
          >
            <TimeIcon />
            <span>
              {dateCreated.toLocaleDateString(language, {
                month: "short",
                year: "numeric",
              })}
            </span>
          </Stack>
        }
        subheaderTypographyProps={{ variant: "body2" }}
      />
      <CardActionArea disabled={!deploy} href={deploy || ""} target="_blank">
        <Tooltip title="View deployment" placement="top">
          <CardMedia
            image={image}
            sx={{ height: 150, backgroundSize: "cover" }}
          />
        </Tooltip>
      </CardActionArea>
      <CardContent>content...</CardContent>
      <CardActions>
        <Tooltip title="repo">
          <Link href={gh_link} target="_blank" children={<GhIcon />} />
        </Tooltip>
        <Tooltip title="deployment">
          <Link
            href={deploy}
            target="_blank"
            children={<LinkIcon color={deploy ? "primary" : "disabled"} />}
          />
        </Tooltip>
      </CardActions>
    </StyledCard>
  );
};
