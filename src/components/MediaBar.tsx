import { GitHub } from "@mui/icons-material";
import { Link, Stack, SvgIcon } from "@mui/material";
import { LinkedinIcon } from "icons";
import type { FC } from "react";

export const MediaBar: FC = () => {
  return (
    <Stack direction={"row"} spacing={8} sx={{ alignSelf: "center" }}>
      <Link
        href="https://www.linkedin.com/in/serhiy-kusyy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgIcon component={LinkedinIcon} color="primary" fontSize="large" />
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
  );
};
