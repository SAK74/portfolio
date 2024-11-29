import { Link } from "@mui/material";

const CV_URL = "https://sak74.github.io/CV/Serhiy_Kusyy_CV.pdf";

export const GetCV = () => {
  return (
    <Link
      href={CV_URL}
      download
      target="_blank"
      sx={{ border: "thin solid", p: 0.25 }}
    >
      Resume
    </Link>
  );
};
