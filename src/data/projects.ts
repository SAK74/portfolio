import mss from "assets/screens/MSS_screen.png";
import pixabay from "assets/screens/pixabay_screen.png";
import youtube from "assets/screens/youtube_screen.png";
import projectManage from "assets/screens/project-manageangular_screen.png";
import { Languages } from "components/ProjectCard";
import _node from "assets/skils/Node.js_logo.svg";
import startAws from "assets/screens/aws_screen.png";
import nextRickMorty_screen from "assets/screens/next-rick-morty_screen.png";
import asyncRace_screen from "assets/screens/async-race_screen.png";
import rest_client_screen from "assets/screens/Rest-client-screen.png";
import { ReactNode } from "react";
import {
  nextRickMortyProject,
  nodeLibraryProject,
  postTaskDescription,
  startAwsProject,
} from "./project-descriptions";
import chat_ai_screen from "assets/screens/ai-chat_screenshot.png";
import posts_task from "assets/screens/screencapture-sak74-pl-Kit-Global-2025-07-16-11_18_16.png";

export interface ProjectType {
  name: string;
  dateCreated: Date;
  image: string;
  languages: Languages[];
  gh_link: string;
  deploy?: string;
  description?: ReactNode;
}

export const projects: ProjectType[] = [
  {
    name: "Mail-sending-system",
    dateCreated: new Date(2022, 8),
    image: mss,
    languages: ["react", "ts", "mui"],
    deploy: "https://mail-sending-system.vercel.app/",
    gh_link: "https://github.com/SAK74/Mail-Sending-System",
    description:
      "\u00a0\u00a0Early React project, communicates with airtable-api,  includes client and proxy-server parts.",
  },

  {
    name: "Pixabay-explore",
    dateCreated: new Date(2022, 2),
    image: pixabay,
    languages: ["react", "mui"],
    deploy: "http://pixabay-api-explore.vercel.app/",
    gh_link: "https://github.com/SAK74/pixabay-API-explore",
    description:
      "\u00a0\u00a0One of the first project. Represents primary React functionality with using Redux as global state manager and external API fetching.",
  },
  {
    name: "Project-manage",
    dateCreated: new Date(2023, 3),
    image: projectManage,
    languages: ["angular", "angular_material"],
    deploy: "https://project-managment-angular.vercel.app/",
    gh_link: "https://github.com/SAK74/project-managment-angular",
    description:
      "\u00a0\u00a0The first angular project. Uses Angular Material UI and communicates with API.",
  },
  {
    name: "YouTuBe-client",
    dateCreated: new Date(2023, 10),
    image: youtube,
    languages: ["angular", "angular_material"],
    gh_link: "https://github.com/SAK74/youtube-client-angular-new",
    deploy: "https://sak74.github.io/youtube-client-angular-new/",
    description:
      "\u00a0\u00a0Learning angular project project. Uses API communication and NGRX (store & effects).",
  },
  {
    name: "Nodejs-library-service",
    dateCreated: new Date(2023, 7),
    image: _node,
    languages: ["nestjs", "prisma", "docker"],
    gh_link: "https://github.com/SAK74/nodejs2023Q2-service",
    description: nodeLibraryProject,
  },
  {
    name: "Aws-start",
    dateCreated: new Date(2024, 2),
    image: startAws,
    languages: ["aws", "ts"],
    deploy: "https://d2w6eb7for7x7b.cloudfront.net/",
    gh_link: "https://github.com/SAK74/aws-start",
    description: startAwsProject,
  },
  {
    name: "Next-Rick&Morty",
    dateCreated: new Date(2024, 4),
    image: nextRickMorty_screen,
    languages: ["next", "react", "ts", "prisma"],
    deploy: "https://next-rick-morty-ten.vercel.app/",
    gh_link: "https://github.com/SAK74/next-rick-morty",
    description: nextRickMortyProject,
  },
  {
    name: "Async-Race",
    dateCreated: new Date(2024, 4),
    image: asyncRace_screen,
    languages: ["react", "ts"],
    deploy: "https://async-race-delta.vercel.app/",
    gh_link: "https://github.com/SAK74/async-race-",
    description:
      "\u00a0\u00a0React project. Uses communication with own API server, Redux & RTK Query...",
  },
  {
    name: "REST-client-App",
    dateCreated: new Date(2025, 3),
    image: rest_client_screen,
    languages: ["next", "react", "ts"],
    deploy: "https://rest-client-app-six.vercel.app/",
    gh_link: "https://github.com/SAK74/rest-client-app",
    description: "Team project to execute REST queries.",
  },

  {
    name: "Multiple-AI chat",
    dateCreated: new Date(2025, 7),
    image: chat_ai_screen,
    languages: ["next", "react", "ts"],
    deploy: "https://chat-claude-gpt-sak74-sak74s-projects.vercel.app/",
    gh_link: "https://github.com/SAK74/multiple-ai-chat",
    description: "Initial draft for multiple-ai agent..",
  },
  {
    name: "Exapled post-service",
    dateCreated: new Date(2025, 7),
    image: posts_task,
    languages: ["next", "react", "ts", "redux"],
    deploy: "https://posts-task-mu.vercel.app/",
    gh_link: "https://github.com/SAK74/test-task-kit-global/tree/ssr",
    description: postTaskDescription,
  },
];
export default projects.sort(
  (a, b) => b.dateCreated.getTime() - a.dateCreated.getTime()
);
