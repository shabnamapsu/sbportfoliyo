import library from "../assets/library.svg";
import portfolio from "../assets/portfolio.svg";
import quiz from "../assets/Quiz.svg";

export const intros = [
  {
    welcometext: "Hi, I'm",
    firstName: "Shabnam",
    lastName: "Bano",
    caption: "MERN Stack Developer",
    description:
      "I am a MERN Stack Developer with hands-on experience in MongoDB, Express.js, React.js, and Node.js.",
  },
];

export const abouts = [
  {
    lottieurl:
      "https://lottie.host/bd52fde3-3f1b-443b-b5ae-94261a49d15f/laHI0S4dr7.lottie",

    description1:
      "I have completed my MCA and have hands-on experience in MongoDB, Express.js, React.js, and Node.js.",

    description2:
      "I am eager to start my career as a MERN Stack Developer and contribute to building efficient web applications.",

    skills: [
      "React",
      "MongoDB",
      "HTML",
      "CSS",
      "Express.js",
      "Node.js",
      "JavaScript",
      "Python",
      "SQL",
    ],
  },
];

export const experiences = [
  {
    timeperiod: "2025",
    title: "Library Management System",
    company: "Personal Project",
    description:
      "Built a full-stack MERN application with authentication, CRUD operations, and MongoDB integration.",
  },
  {
    timeperiod: "2023",
    title: "Portfolio Website",
    company: "Personal Project",
    description:
      "Developed a responsive portfolio using React and Tailwind CSS.",
  },
  {
    timeperiod: "2022",
    title: "Quiz Application",
    company: "Personal Project",
    description:
      "Created an interactive quiz application using React and JavaScript.",
  },
];

export const projects = [
  {
    name: "Library Management System",
    technologies: "React, Node.js, Express.js, MongoDB",
    description:
      "Developed a full-stack MERN application with authentication and CRUD operations.",
    image: library,
    link: "https://github.com/yourusername/library-management",
  },
  {
    name: "Portfolio Website",
    technologies: "React, Tailwind CSS",
    description:
      "Built a responsive personal portfolio website.",
    image: portfolio,
    link: "https://github.com/yourusername/portfolio",
  },
  {
    name: "Quiz Application",
    technologies: "JavaScript, React",
    description:
      "Created an interactive quiz application with score tracking.",
    image: quiz,
    link: "https://github.com/yourusername/quiz-app",
  },
];

export const courses = [
  {
    name: "MERN Stack Development",
    institute: "Udemy",
    description:
      "Learned MongoDB, Express.js, React.js, and Node.js.",
    image: "/mern.png",
  },
  {
    name: "React JS Certification",
    institute: "Coursera",
    description:
      "Covered React fundamentals, hooks, and state management.",
    image: "/react.png",
  },
];

export const contacts = [
  {
    name: "Shabnam Bano",
    email: "shabnam527@gmail.com",
    age: 24,
    address: "Uttar Pradesh, India",
    gender: "Female",
  },
];