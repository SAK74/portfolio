import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Tabs,
  Tab,
  Box,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { Certyficates } from "components/Certyficates";
import { useRootCtx } from "components/RootProvider";
import { Skills } from "components/skills/Skills";
import { useContext, useState } from "react";
import type { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import useSound from "use-sound";
import boop from "assets/sounds/switch-off.wav";

type AllTabs = "skills" | "certyficates";

const Panel: FC<PropsWithChildren<{ label: AllTabs; value: AllTabs }>> = ({
  children,
  label,
  value,
}) => {
  return value === label && <Box sx={{ mt: 1.5 }}>{children}</Box>;
};

export const SkillsPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<AllTabs>("skills");

  const isLarge: boolean = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up("sm")
  );

  const { onSound } = useRootCtx();
  const [playLink] = useSound(boop, { volume: 0.5 });

  return (
    <>
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid item xs={12} sm={6}>
          <Tabs
            value={activeTab}
            onChange={(ev, value) => {
              if (onSound) {
                playLink();
              }
              setActiveTab(value);
            }}
            variant="fullWidth"
          >
            <Tab label="Skills" value={"skills"} />
            <Tab label="Certyficates" value={"certyficates"} />
          </Tabs>
          <Panel value={activeTab} label="skills">
            <Skills />
          </Panel>
          <Panel value={activeTab} label="certyficates">
            <Certyficates />
          </Panel>
        </Grid>

        {isLarge && (
          <Grid item sm={5} xs={false}>
            <Card elevation={3}>
              <CardHeader title={t("skils.title")} />
              <CardContent sx={{ whiteSpace: "break-spaces" }}>
                {t("skils.description")}
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
};
