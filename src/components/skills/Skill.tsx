import type { FC } from "react";
import { Box, Rating, Stack, SvgIcon, Tooltip } from "@mui/material";
import type { SkillType } from "../../data/skills_data";
import { IconFromUrl } from "utils/IconFromUrl";

export const Skill: FC<SkillType & { n: number }> = ({
  icon,
  level,
  n,
  name,
}) => {
  return (
    <Tooltip title={name} sx={{}}>
      <Stack
        sx={{
          alignItems: "center",
          position: "relative",
          animation: `jump .5s ${(n + 1) * 0.1}s`,
        }}
      >
        <Box
          sx={{
            position: "relative",
            "&:hover": { bottom: ".6rem" },
            bottom: "0",
            transition: "bottom .5s",
            cursor: "help",
          }}
        >
          {typeof icon === "string" ? (
            <IconFromUrl url={icon} fontSize="large" />
          ) : (
            <SvgIcon component={icon} inheritViewBox fontSize="large" />
          )}
        </Box>

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
