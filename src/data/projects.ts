import mss from "assets/screens/MSS_screen.png";
import pixabay from "assets/screens/pixabay_screen.png";
import youtube from "assets/screens/youtube_screen.png";
import projectManage from "assets/screens/project-manageangular_screen.png";
import { Languages } from "components/ProjectCard";
import _node from "assets/skils/Node.js_logo.svg";
import startAws from "assets/screens/aws_screen.png";
import nextRickMorty_screen from "assets/screens/next-rick-morty_screen.png";
import asyncRace_screen from "assets/screens/async-race_screen.png";

export interface ProjectType {
  name: string;
  dateCreated: Date;
  image: string;
  languages: Languages[];
  gh_link: string;
  deploy?: string;
}

export const projects: ProjectType[] = [
  {
    name: "Mail-sending-system",
    dateCreated: new Date(2022, 8),
    image: mss,
    languages: ["react", "ts", "mui"],
    deploy: "https://mail-sending-system.vercel.app/",
    gh_link: "https://github.com/SAK74/Mail-Sending-System",
  },

  {
    name: "Pixabay-explore",
    dateCreated: new Date(2022, 2),
    image: pixabay,
    languages: ["react", "mui"],
    deploy: "http://pixabay-api-explore.vercel.app/",
    gh_link: "https://github.com/SAK74/pixabay-API-explore",
  },
  {
    name: "Project-manage",
    dateCreated: new Date(2023, 3),
    image: projectManage,
    languages: ["angular", "angular_material"],
    deploy: "https://project-managment-angular.vercel.app/",
    gh_link: "https://github.com/SAK74/project-managment-angular",
  },
  {
    name: "YouTuBe-client",
    dateCreated: new Date(2023, 3),
    image: youtube,
    languages: ["angular"],
    gh_link: "https://github.com/SAK74/youtube-client-angular",
  },
  {
    name: "Nodejs-library-service",
    dateCreated: new Date(2023, 7),
    image: _node,
    languages: ["nestjs", "prisma", "docker"],
    gh_link: "https://github.com/SAK74/nodejs2023Q2-service",
  },
  {
    name: "Aws-start",
    dateCreated: new Date(2024, 2),
    image: startAws,
    languages: ["aws"],
    deploy: "https://d2w6eb7for7x7b.cloudfront.net/",
    gh_link: "https://github.com/SAK74/aws-start",
  },
  {
    name: "Next-Rick&Morty",
    dateCreated: new Date(2024, 4),
    image: nextRickMorty_screen,
    languages: ["next", "react", "prisma"],
    deploy: "https://next-rick-morty-ten.vercel.app/",
    gh_link: "https://github.com/SAK74/next-rick-morty",
  },
  {
    name: "Async-Race",
    dateCreated: new Date(2024, 4),
    image: asyncRace_screen,
    languages: ["react"],
    deploy: "https://async-race-delta.vercel.app/",
    gh_link: "https://github.com/SAK74/async-race-",
  },
];
