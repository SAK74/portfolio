import { Paper, useTheme } from "@mui/material";

export const MainPage = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Paper>Main Page</Paper>
    </>
  );
};
