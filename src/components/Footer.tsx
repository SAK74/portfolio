import { GitHub } from "@mui/icons-material";
import { Box, Link } from "@mui/material";

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: 1 / 1,
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.primary.dark
          : theme.palette.background.paper,
      color: (theme) => theme.palette.text.secondary,
      py: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 1,
      boxShadow: (theme) => theme.shadows[20],
      height: "2.5rem",
    }}
  >
    &#169; SAK74
    <Link
      href="https://github.com/SAK74"
      color="inherit"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHub />
    </Link>
    2023
  </Box>
);
