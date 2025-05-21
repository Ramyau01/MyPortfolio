import { nanoid } from "nanoid";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import mailIcon from "../assets/mail-icon.svg";
import cmartImage from "../assets/cmart-hero.webp";
import personaImage from "../assets/persona.webp";
export const links = [
  { id: nanoid(), text: "About", url: "/#about" },
  { id: nanoid(), text: "Projects", url: "/#projects" },
  { id: nanoid(), text: "Skills", url: "/#skills" },
];

//social links
export const socialLinks = [
  {
    id: nanoid(),
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/ramya-unnikrishnan-b3869244",
    linkInfo: "Visit Ramya Unnikrishnan's LinkedIn profile",
  },
  {
    id: nanoid(),
    icon: githubIcon,
    url: "https://github.com/Ramyau01",
    linkInfo: "Visit Ramya Unnikrishnan's Github profile",
  },
  {
    id: nanoid(),
    icon: mailIcon,
    url: "mailto:ramyakrishnan13@gmail.com",
    linkInfo: "Email Ramya Unnikrishnan",
  },
];

// Experience
export const experienceData = [
  {
    year: "Jun 2008 - Jun 2012",
    title: "Bachelors in Information Technology",
    experience: ["Graduated from Anna University,India with CGPA score of 8.0"],
  },
  {
    year: "Apr 2013 - Jun 2015",
    title: "Infosys - Systems Engineer",
    experience: [
      "Worked as a Network Operation Engineer for Baker Hughes",
      "Proactively automated networking tasks using Python Scripts.",
      "Earned recognition for performance and secured a career transition to Python Developer",
    ],
  },
  {
    year: "Jul 2015 - Dec 2017",
    title: "Infosys - Senior Systems Engineer",
    experience: [
      "Worked as a Backend Developer for Telstra",
      "Built and maintained backend APIs for Telstra using Django REST Framework.",
    ],
  },
  {
    year: "Feb 2018 - Dec 2018 ",
    title: "Lead Engineer",
    experience: [
      "Worked as a Python Developer for John Deere",
      "Built a Python tool to convert complex XML data into structured CSV files.",
      "Automated data workflows, reducing manual effort and improving accuracy.",
    ],
  },
  {
    year: "Jan 2019 - Feb 2023",
    title: "Fitness Coach (Entrepreneurial Venture)",
    experience: [
      "Founded and managed a Fitness coaching business",
      "Conceptualized and co-developed a dynamic web app for personalized coaching.",
      "Enabled coaches to create plans, track progress, and engage with clients.",
      "Gained hands-on experience in business operations and web development.",
    ],
  },
  {
    year: "Feb 2023 - Present",
    title: "Frontend Developer",
    experience: [
      "Upskilled in modern frontend technologies including React and Tailwind CSS.",
      "Delivered a freelance website project for a small business client.",
      "Built multiple personal projects to deepen expertise and showcase skills.",
    ],
  },
];

// Skills
export const skillsData = [
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Bootstrap",
    icon: "/skills/tailwind.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "Vite",
    icon: "/skills/vite.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Python",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Django REST",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
  {
    name: "VS Code",
    icon: "/skills/vscode.png",
  },
];

//Project Data

export const ProjectInfo = [
  {
    id: nanoid(),
    image: cmartImage,
    type: "Personal",
    title: "E-commerce Application",
    website_url: "https://coruscating-hamster-bd961d.netlify.app/",
    github_url: "https://github.com/Ramyau01/E-Commerce-App.git",
    techstack: ["ReactJS", "Tailwind CSS", "Redux", "Vite", "Git"],
    description: [
      "Built a responsive eCommerce app with React.js, Tailwind CSS, and Redux Toolkit, simulating real shopping experiences.",
      "Implemented product listing, filtering, user, and cart management with Redux.",
      "Integrated JWT-based authentication for secure login and session management.",
      "Developed a clean, modular UI using DaisyUI plugins.",
      "Ensured accessibility compliance following WCAG guidelines.",
      "Optimized performance with Vite bundling.",
      "Performed cross-browser testing to guarantee consistent functionality.",
      "Managed source code with Git version control.",
    ],
  },
  {
    id: nanoid(),
    image: personaImage,
    type: "Professional",
    title: "Persona Bridal Studio",
    website_url: "https://coruscating-hamster-bd961d.netlify.app/",
    github_url: "https://github.com/Ramyau01/personabeautysalon.git",
    techstack: ["HTML", "CSS", "JS", "Bootstrap", "Git"],
    description: [
      "Developed responsive, interactive pages using HTML5, CSS3, and JavaScript.",
      "Utilized SASS for modular CSS and Bootstrap for layout design.",
      "Adhered to WCAG guidelines for accessibility compliance.",
      "Conducted cross-browser testing for consistent performance.",
      "Leveraged Google Search Console and PageSpeed Insights for SEO and load time optimization.",
      "Managed source code using Git.",
    ],
  },
];
