import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa6";
import {
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiMicrosoftazure,
  SiGooglecloud,
  SiNetlify,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiPrisma,
} from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";

const skillData = [
  {
    scope: "LANGUAGES",
    tech: "HTML",
    icon: React.createElement(FaHtml5),
  },
  {
    scope: "LANGUAGES",
    tech: "CSS",
    icon: React.createElement(FaCss3),
  },
  {
    scope: "LANGUAGES",
    tech: "JavaScript",
    icon: React.createElement(BiLogoJavascript),
  },
  {
    scope: "LANGUAGES",
    tech: "TypeScript",
    icon: React.createElement(BiLogoTypescript),
  },
  {
    scope: "FRAMEWORKS / LIBRARIES",
    tech: "React.js",
    icon: React.createElement(FaReact),
  },
  {
    scope: "FRAMEWORKS / LIBRARIES",
    tech: "TailWindCSS",
    icon: React.createElement(BiLogoTailwindCss),
  },
  {
    scope: "FRAMEWORKS / LIBRARIES",
    tech: "Node.js",
    icon: React.createElement(FaNodeJs),
  },
  {
    scope: "FRAMEWORKS / LIBRARIES",
    tech: "Express.js",
    icon: React.createElement(SiExpress),
  },
  {
    scope: "FRAMEWORKS / LIBRARIES",
    tech: "Next.js",
    icon: React.createElement(SiNextdotjs),
  },
  {
    scope: "DATABASES",
    tech: "MongoDB",
    icon: React.createElement(SiMongodb),
  },
  {
    scope: "DATABASES",
    tech: "PostgreSQL",
    icon: React.createElement(SiPostgresql),
  },
  {
    scope: "DATABASES",
    tech: "Redis",
    icon: React.createElement(SiRedis),
  },
  {
    scope: "CLOUD / DEVOPS",
    tech: "Azure",
    icon: React.createElement(SiMicrosoftazure),
  },
  {
    scope: "CLOUD / DEVOPS",
    tech: "AWS",
    icon: React.createElement(FaAws),
  },
  {
    scope: "CLOUD / DEVOPS",
    tech: "GCP",
    icon: React.createElement(SiGooglecloud),
  },
  {
    scope: "CLOUD / DEVOPS",
    tech: "Netlify",
    icon: React.createElement(SiNetlify),
  },
  {
    scope: "CLOUD / DEVOPS",
    tech: "Vercel",
    icon: React.createElement(SiVercel),
  },
  {
    scope: "CLOUD / DEVOPS",
    tech: "Docker",
    icon: React.createElement(SiDocker),
  },
  {
    scope: "CLOUD / DEVOPS",
    tech: "Kubernetes",
    icon: React.createElement(SiKubernetes),
  },
  {
    scope: "TOOLS",
    tech: "Git",
    icon: React.createElement(FaGitAlt),
  },
  {
    scope: "TOOLS",
    tech: "GitHub",
    icon: React.createElement(FaGithub),
  },
  {
    scope: "TOOLS",
    tech: "NPM",
    icon: React.createElement(FaNpm),
  },
  {
    scope: "TOOLS",
    tech: "Prisma",
    icon: React.createElement(SiPrisma),
  },
];

export default skillData;
