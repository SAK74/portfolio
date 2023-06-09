import test from "assets/photo.jpg";

export interface ProjectType {
  name: string;
  dateCreated: Date;
  image: string;
}

export const projects: ProjectType[] = [
  {
    name: "Mail-sending-system",
    dateCreated: new Date(2022, 8),
    image: test,
  },
  {
    name: "Async-Race",
    dateCreated: new Date(2023, 0),
    image: test,
  },
  {
    name: "Pixabay-explore",
    dateCreated: new Date(2022, 2),
    image: test,
  },
];
