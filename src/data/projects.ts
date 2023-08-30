import mss from "assets/screens/MSS_screen.png";
import race from "assets/screens/async_race_screen.png";
import pixabay from "assets/screens/pixabay_screen.png";
import youtube from "assets/screens/youtube_screen.png";
import projectManage from "assets/screens/project-manageangular_screen.png";
import { Languages } from "components/ProjectCard";

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
    name: "Async-Race",
    dateCreated: new Date(2023, 0),
    image: race,
    languages: ["js"],
    deploy: "https://sak74.github.io/Async-Race/",
    gh_link: "https://github.com/SAK74/Async-Race",
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
];
