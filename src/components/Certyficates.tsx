import { List } from "@mui/material";
import { certyficates } from "data/certyficates";
import { FC } from "react";
import { Certyficate } from "./Certficate";

export const Certyficates: FC = () => {
  return (
    <List>
      {certyficates.map((certyficate) => (
        <Certyficate key={certyficate.title} {...certyficate} />
      ))}
    </List>
  );
};
