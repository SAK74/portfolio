import { szkoła_reacta_logo, przeprogramowani_logo } from "icons";
import { FC } from "react";

export type CertyficateType = {
  title: string;
  issuer: {
    logo: FC | string;
    name: string;
    link: string;
  };
  issue: Date;
  pdfLink: string;
  skills?: string[];
};

export const certyficates: CertyficateType[] = [
  {
    title: "AWS CLOUD DEVELOPER",
    issuer: {
      name: "The Rolling Scopes School",
      logo: "https://rs.school/assets/rss-logo-CM8B7fA7.svg",
      link: "https://rs.school/",
    },
    issue: new Date(2024, 0),
    pdfLink: "https://app.rs.school/certificate/uu6ipr0d",
    skills: ["Amazon Web Services (AWS)"],
  },
  {
    title: "React Basic & Advanced",
    issuer: {
      name: "Szkoła Reacta",
      logo: szkoła_reacta_logo,
      link: "https://szkolareacta.pl/",
    },
    issue: new Date(2021, 11),
    pdfLink:
      "https://sak74.github.io/certyficates/Szkola_Reacta_Serhiy_Kusyy.pdf",
    skills: ["React.js", "Redux", "Next.js"],
  },
  {
    title: "Opanuj Frontend AI Edition",
    issuer: {
      name: "Przeprogramowani",
      logo: przeprogramowani_logo,
      link: "https://przeprogramowani.pl/",
    },
    issue: new Date(2024, 9),
    pdfLink: "https://sak74.github.io/certyficates/przeprogramowani.pdf",
    skills: ["Frontend", "Software architecture"],
  },
  {
    title: "NODEJS 2023 Q2",
    issuer: {
      name: "The Rolling Scopes School",
      logo: "https://rs.school/assets/rss-logo-CM8B7fA7.svg",
      link: "https://rs.school/",
    },
    issue: new Date(2023, 8),
    pdfLink: "https://app.rs.school/certificate/d52e7ekr",
    skills: [
      "Node.js basics",
      "Testing of Node.js application",
      "Network communication. HTTP & WebSockets",
      "WebAPI: REST & GraphQL",
      "Nest.js",
      "Containerization, Docker",
      "DB: SQL, PostgreSQL",
      "Authentication & authorization, JWT",
    ],
  },
  {
    title: "ANGULAR 2023 Q1",
    issuer: {
      name: "The Rolling Scopes School",
      logo: "https://rs.school/assets/rss-logo-CM8B7fA7.svg",
      link: "https://rs.school/",
    },
    issue: new Date(2023, 5),
    pdfLink: "https://app.rs.school/certificate/qfpp74jz",
    skills: ["Angular", "RxJS", "Angular Material"],
  },
  {
    title: "REACT 2023 Q1",
    issuer: {
      name: "The Rolling Scopes School",
      logo: "https://rs.school/assets/rss-logo-CM8B7fA7.svg",
      link: "https://rs.school/",
    },
    issue: new Date(2023, 5),
    pdfLink: "https://app.rs.school/certificate/q7mmbb0w",
    skills: ["React.js", "Redux", "Next.js"],
  },
  {
    title: "JS/FE COURSE EN 2022Q3",
    issuer: {
      name: "The Rolling Scopes School",
      logo: "https://rs.school/assets/rss-logo-CM8B7fA7.svg",
      link: "https://rs.school/",
    },
    issue: new Date(2023, 3),
    pdfLink: "https://app.rs.school/certificate/8udhxu4s",
    skills: ["Java Script", "HTML", "CSS"],
  },
];
