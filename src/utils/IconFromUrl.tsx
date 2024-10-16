import { FC, ReactNode, useEffect, useState } from "react";
import { convertToReactNode } from "./convertToReactNode";
import { CircularProgress, SvgIcon, SvgIconTypeMap } from "@mui/material";
import QuestIcon from "@mui/icons-material/QuestionMark";
import { fetchSVG } from "./fetchProxy";

export const IconFromUrl: FC<{ url: string } & SvgIconTypeMap["props"]> = ({
  url,
  ...svgProps
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [iconNode, setIconNode] = useState<ReactNode>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchSVG(url)
      .then((svg) => {
        const parser = new DOMParser();
        const svgEl = parser.parseFromString(
          svg,
          "image/svg+xml"
        ).documentElement;
        if (svgEl.nodeName !== "svg") {
          throw Error("Isn't valid svg url!");
        }

        const reactNode = convertToReactNode(svgEl);
        setIconNode(reactNode);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <CircularProgress size={25} />
  ) : error ? (
    <QuestIcon color="disabled" {...svgProps} />
  ) : (
    <SvgIcon {...svgProps}>{iconNode}</SvgIcon>
  );
};
