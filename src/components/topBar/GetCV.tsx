import { Link } from "@mui/material";
import { CV_URL } from "data/personals";

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
