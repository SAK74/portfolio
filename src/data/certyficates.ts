import { szkoła_reacta_logo } from "icons";
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
    skills: ["ReactJS"],
  },
];
