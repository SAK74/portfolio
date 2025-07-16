import { List, ListItem, Typography } from "@mui/material";

export const nodeLibraryProject = (
  <>
    Backend project, bases on NextJs, uses
    <ul>
      <li>authorization</li>
      <li>communication with db (postgres/mongodb) through Prisma ORM</li>
      <li>logging & error handling</li>
      <li>containerization</li>
    </ul>
  </>
);

export const startAwsProject = (
  <>
    Learning AWS-backend project, uses core AWS features (see{" "}
    <a
      href="https://github.com/SAK74/aws-start/blob/main/README.md"
      target="_blank"
    >
      description
    </a>
    ).
  </>
);

export const nextRickMortyProject = (
  <>
    Using Next@14 functionality and
    <ul>
      <li>interaction with PstgresDB through Prisma ORM</li>
      <li>authorization with AuthJS</li>
    </ul>
  </>
);

export const postTaskDescription = (
  <>
    <Typography variant="body1" variantMapping={{ body1: "h2" }}>
      Exampled post service
    </Typography>
    <ul>
      <li>Use Redux and Firebase to data management </li>
      <li>Auth with firebase and auth.js</li>
      <li>Sorting, searching, editing, e.t.c.</li>
    </ul>
  </>
);
