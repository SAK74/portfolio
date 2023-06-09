import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
} from "@mui/material";
import { ProjectType } from "projects";
import { FC } from "react";

const StyledCard = styled(Card)(({ theme }) => ({}));

export const ProjectCard: FC<ProjectType> = ({ name, image }) => {
  return (
    <StyledCard sx={{ width: { lg: 300 } }} elevation={5}>
      <CardHeader title={name} />
      <CardMedia image={image} sx={{ height: 150, backgroundSize: "cover" }} />
      <CardContent>content...</CardContent>
    </StyledCard>
  );
};
