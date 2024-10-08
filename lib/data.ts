import React from "react";
import { TbPigMoney } from "react-icons/tb";
import { FaReact, FaLaptopMedical } from "react-icons/fa";
import { LuGraduationCap, LuPlaneTakeoff } from "react-icons/lu";
import portfolio from "@/public/portfolio.png";
import pcb from "@/public/pcb.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend Software Engineer Intern",
    location: "Quickli Pty Ltd",
    link: "https://quickli.com.au/",
    description:
      "A fintech startup. I developed an application to assist the QA team to perform their job more effeciently, contributed a feature to the webapp and maintained the codebase to eradict bugs.",
    icon: React.createElement(TbPigMoney),
    date: "July 2022 - May 2023",
  },
  {
    title: "Backpacker",
    location: "Africa, Europe, and Asia",
    link: "https://en.wikipedia.org/wiki/Backpacking_(travel)",
    description:
      "Spent 4 months overlanding the 18 countries across African continent, Eastern Europe, and Sout-East Asia. Camping for 24 days continuously across 4 African countries.",
    icon: React.createElement(LuPlaneTakeoff),
    date: "May 2023 - August 2023",
  },
  {
    title: "Electrical Engineer Intern",
    location: "Saluda Medical Pty Ltd",
    link: "https://www.saludamedical.com/",
    description:
      "A medical devices company specialising in spinal cord stimulation. I developed an application to automate the synthesis multiple data models, including data from clinical trials, and test bench experiments. Automated QMS documentation would then be produced based off these results.",
    icon: React.createElement(FaLaptopMedical), // IoAirplaneOutline
    date: "Dec 2023 - May 2024",
  },
  {
    title: "Full-Stack Software Engineer",
    location: "Elentar Energy",
    link: "https://au.linkedin.com/company/elentar",
    description:
      "An SAAS startup specialising in battery storage and grid integration. I contributed to the full-stack development of a beta-stage web application.",
    icon: React.createElement(FaReact),
    date: "August 2024 - Present",
  },
  {
    title: "Graduate of Electrical Engineering (Honours) & Computer Science",
    location: "UNSW, Sydney",
    link: "https://www.unsw.edu.au/",
    description:
      "Finalised 5.33 (2 d.p.) years of tertiary education, completing 40 subjects across four different faculties.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2025 (Expected)",
  },
] as const;

export const projectsData = [
  {
    title: "AgriCluster",
    description:
      "A long-range, low-powered IOT device, utilising LoRa technology to relay soil parameters in agricultural settings.",
    tags: ["C", "KiCad EDA", "ESP32", "LoRa", "SMD Soldering"],
    imageUrl: pcb,
  },
  {
    title: "Personal Website",
    description:
      "The website you're looking at now! Developed using Next.js 13 and deployed using Vercel.",
    tags: ["React", "Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Rust",
  "Python",
  "Java",
  "C",
  "C#",
  "PostgreSQL",
  "CI/CD",
  "RESTful",
  ".Net",
  "Scrum",
  "SOLID",
  "Linux",
  "Git",
  "AWS (S3)",
  "MongoDB",
  "Docker",
  "Vercel",
  "Jupyter Notebook",
  "Hugging Face",
  "Scikit Learn",
  "PyTorch",
  "TensorFlow",
  "pandas",
  "NumPy",
  "Matplotlib",
  "Puppeteer",
  "Jinja2",
  "wav2vec",
] as const;
