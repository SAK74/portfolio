import { FC } from "react";
import { Rating, Stack, SvgIcon, Tooltip } from "@mui/material";
import { SkillType } from "./skills_data";

export const Skill: FC<SkillType & { n: number }> = ({
  icon,
  level,
  n,
  name,
}) => {
  return (
    <Tooltip title={name}>
      <Stack
        sx={{
          alignItems: "center",
          position: "relative",
          animation: `jump .5s ${(n + 1) * 0.1}s`,
        }}
      >
        <SvgIcon component={icon} inheritViewBox fontSize="large" />
        {level && (
          <Rating
            readOnly
            defaultValue={level}
            max={5}
            precision={0.5}
            size="small"
          />
        )}
      </Stack>
    </Tooltip>
  );
};
