import { JsonValue } from "@prisma/client/runtime/library";

/* Sections Declarations */
export interface IHome {
  sectionClass: string;
  divClass: string;
  dataDivClass: string;
  imageDivClass: string;
  imageSrc: any;
  imageAlt: string;
  sectionName: string;
  children: React.ReactNode;
}

export interface IUser {
  id?: string;
  email: string;
  password: string;
}

// Skills Declarations
export interface ISkill {
  id?: string;
  name: string;
  category: string;
  icon: string;
}

export interface ISkills {
  scope: string;
  skill: ISkill[];
}

// Projects Declarations
export interface IProject {
  id?: string;
  title: string;
  description: string;
  link: string;
  github: string;
  techstack: JsonValue[];
}

// Socials Declarations
export interface ISocial {
  id?: string;
  name: string;
  link: string;
  icon: string;
}

/*Sections Declarations */

/*Blogs Declarations */
export interface IBlog {
  id?: Key | null | undefined;
  indexedTitle?: string | null | undefined;
  publishedOn?: string | null | undefined;
  author?: string | null | undefined;
  category?: string | null | undefined;
  keywords?: string | null | undefined;
  title?: string | null | undefined;
  imageUrl?: string | null | undefined;
  article?: string | null | undefined;
}
