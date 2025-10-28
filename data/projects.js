import vocabup from "@/app/assets/projectsImages/vocabup.png";
import timeslink from "@/app/assets/projectsImages/timeslink.png";
import crud from "@/app/assets/projectsImages/crud.png";

export const projects = [
  {
    id: 1,
    title: "Timeslink Logistics Platform",
    description:
      "Full-stack logistics web app with real-time shipment tracking, Google OAuth, and an admin dashboard for project and content management.",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "VPS Hosting",
    ],
    category: "nextjs",
    github: "https://github.com/Tilwa/timeslink",
    live: "https://timeslinklogistics.com",
    featured: true,
    image: timeslink,
  },

  {
    id: 2,
    title: "Vocabup Nextjs App",
    description:
      "Vocabulary builder app using Next.js, Redux Toolkit, Prisma, and PostgreSQL. Features interactive cards with multiple-choice answers and animations.",
    technologies: ["React", "Next.js", "Redux Toolkit", "PostgreSQL", "Prisma"],
    category: "nextjs",
    github: "https://github.com/Tilwa/vocabup",
    live: "http://codesbyshahrukh.online/",
    featured: true,
    image: vocabup,
  },
  {
    id: 100,
    title: "CRUD Next.js Application",
    description:
      "A full-stack CRUD web app built with Next.js, Prisma, and PostgreSQL. It allows users to create, read, update, and delete records seamlessly with a clean UI and secure backend integration.",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL", "Node.js"],
    category: "nextjs",
    github: "https://github.com/Tilwa/nextjs-crud",
    live: "https://crud.codesbyshahrukh.online/",
    featured: true,
    image: crud,
  },
];
