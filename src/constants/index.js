import project2 from "../assets/projects/chat application.png";
import project4 from "../assets/projects/medium.png";
import project3 from "../assets/projects/paytm.png";
import project1 from "../assets/projects/real estate.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 6 months of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const EXPERIENCES = [
  {
    year: "2023 Dec - 2024 June",
    role: "Full Stack Developer",
    company: "Web Synergies",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Tailwind CSS", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Real Estate",
    image: project1,
    description:
      "A fully functional real estate platform with features like property listings, advanced search filters, and user authentication.",

    technologies: [
      "Firebase",
      "Google OAuth",
      "MongoDB",
      "React Js",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/rishie81311518/mer-estate.git"
  },
  {
    title: "Real Time Chat Application",
    image: project2,
    description:
      "A real-time chat application with features such as group and personal messaging, emoji support, and file sharing for seamless communication.",
    technologies: [
      "React",
      "ShadCN",
      "Multer",
      "Node.js",
      "MongoDB",
    ],
    githubUrl: "https://github.com/rishie81311518/react-chat-app.git"
  },
  {
    title: "PayConnect: Secure Payments & Seamless Transactions",
    image: project3,
    description:
      "A turborepo-powered fintech ecosystem with Next.js merchant and user apps, plus a bank server webhook, all backed by PostgreSQL and containerized with Docker.",
    technologies: [
      "Turborepo",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/rishie81311518/Paytm.git"
  },
  {
    title: "Medium Blog",
    image: project4,
    description:
      "A modern blogging platform built with Next.js, styled with Tailwind CSS, and powered by MongoDB for seamless content creation and sharing.",
    technologies: ["Next Js", "Tailwind CSS", "Monorepo", "Postgresql"],
    githubUrl: "https://github.com/rishie81311518/medium-blog.git"
  },
];

export const CONTACT = {
  address: "Saroornagar, Kalyani Towers  ",
  phoneNo: "+91 8978667407 ",
  email: "rishiekandala@example.com",
};
