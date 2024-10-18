import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nextIcon from "../../assets/next-icon.svg";
import mongoIcon from "../../assets/mongo-icon.png";
import mysqlIcon from "../../assets/mysql-icon.png";
import figmaIcon from "../../assets/figma-icon.png";
import gitIcon from "../../assets/git-icon.png";
import pythonIcon from "../../assets/python-icon.png";
import reduxIcon from "../../assets/redux-icon.png";

// Define types for skills, certifications, and education
interface Skill {
  name: string;
  icon: string;
  delay: number;
}

interface Data {
  skills: Skill[];
  certifications: string[];
  education: string[];
}

// The data with typed structure
export const data: Data = {
  skills: [
    { name: "React", icon: reactIcon, delay: 0.13 },
    { name: "Typescript", icon: typescriptIcon, delay: 0.14 },
    { name: "Vue", icon: vueIcon, delay: 0.15 },
    { name: "Node", icon: nodeIcon, delay: 0.16 },
    { name: "HTML", icon: htmlIcon, delay: 0.17 },
    { name: "CSS", icon: cssIcon, delay: 0.18 },
    { name: "Bootstrap", icon: bootstrapIcon, delay: 0.19 },
    { name: "JavaScript", icon: jsIcon, delay: 0.20 },
    { name: "Next.js", icon: nextIcon, delay: 0.21 },
    { name: "MongoDB", icon: mongoIcon, delay: 0.22 },
    { name: "MySQL", icon: mysqlIcon, delay: 0.23 },
    { name: "Figma", icon: figmaIcon, delay: 0.24 },
    { name: "Git", icon: gitIcon, delay: 0.25 },
    { name: "Python", icon: pythonIcon, delay: 0.26 },
    { name: "Redux", icon: reduxIcon, delay: 0.27 }
  ],
  certifications: [
    "Department of Labor Software Developer",
    "Apprenticeship Certificate Of Completion",
    "COITB Certified JavaScript Professional",
    "COITB Certified React Developer",
    "COITB MySQL Certificate",
    "COITB HTML/CSS Designer Certificate"
  ],
  education: [
    "DevCodeCamp: Bootcamp, MERN",
    "Google: Certification, UX/UI",
    "Official DOL: Apprenticeship",
    "Era Solutions: Course & Exam, JavaScript",
    "Era Solutions: Course & Exam, MySQL Backend Developer",
    "Era Solutions: Course & Exam, HTML/CSS Designer",
    "Era Solutions: Course & Exam, React Developer"
  ]
};
