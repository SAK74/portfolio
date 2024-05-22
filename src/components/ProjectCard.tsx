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
  Typography,
} from "@mui/material";
import {
  AccessTime as TimeIcon,
  GitHub as GhIcon,
  Link as LinkIcon,
} from "@mui/icons-material";
import { ProjectType } from "data/projects";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import * as Icon from "icons";

export type Languages =
  | "angular"
  | "js"
  | "mui"
  | "ts"
  | "react"
  | "angular_material"
  | "nestjs"
  | "prisma"
  | "docker"
  | "aws"
  | "next";

const matched: { [Prop in Languages]: FC } = {
  angular: Icon.Angular,
  js: Icon.Js,
  ts: Icon.Ts,
  react: Icon.ReactIcon,
  mui: Icon.Mui,
  angular_material: Icon.AngularMaterial,
  nestjs: Icon.NestJs,
  prisma: Icon.Prisma,
  docker: Icon.Docker,
  aws: Icon.Aws,
  next: Icon.NextIcon,
};

const StyledCard = styled(Card)(({ theme }) => ({}));

export const ProjectCard: FC<ProjectType> = ({
  name,
  image,
  languages,
  dateCreated,
  gh_link,
  deploy,
  description,
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
      {/*todo*/}
      <CardContent>
        <Typography
          variant="body2"
          component={"div"}
          sx={{ fontStyle: "italic" }}
        >
          {description}
        </Typography>
      </CardContent>
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
