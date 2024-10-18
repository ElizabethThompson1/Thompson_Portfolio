import { useState } from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { IoEyeOutline } from "react-icons/io5";

interface ProjectItemProps {
  link: string;
  imgSrc: string;
  title: string;
  stack: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ link, imgSrc, title, stack }) => (
  <div className="ag-courses_item">
    <ScrollAnimation animateIn="flipInX">
      <a href={link} className="ag-courses-item_link" target="_blank" rel="noreferrer">
        <div className="ag-courses-item_bg"></div>
        <img src={imgSrc} alt={title} className="project-image" />
        <div className="overlay">
          <IoEyeOutline />
          View Site
        </div>
        <div className="ag-courses-item_title">{title}</div>
        <div className="ag-courses-item_date-box">
          <span className="ag-courses-item_date">Stack: {stack}</span>
        </div>
      </a>
    </ScrollAnimation>
  </div>
);

export function Project() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const projects = [
    {
      link: "https://www.ruthandnaomico.com/",
      imgSrc: "/Images/ruthandnaomi.png",
      title: "Wandas Cleaning Web",
      stack: "React, Node.js",
    },
    {
      link: "https://www.erasolutions.us/",
      imgSrc: "/Images/erahome.png",
      title: "ERAREACTPROD",
      stack: "React, Redux",
    },
    {
      link: "https://www.tks360.com/",
      imgSrc: "/Images/tks.png",
      title: "TKS 360",
      stack: "Next.js",
    },
    {
      link: "https://luckyfallis.org/",
      imgSrc: "/Images/lucky.png",
      title: "Lucky Fallis",
      stack: "N/A",
    },
    {
      link: "https://www.hidefrenovations.com/",
      imgSrc: "/Images/hide.png",
      title: "HiDef Renovations",
      stack: "N/A",
    },
    {
      link: "https://www.hidefrenovations.com/",
      imgSrc: "/Images/safespace.png",
      title: "TheSafeSpacePlace",
      stack: "N/A",
    },
    {
      link: "https://www.figma.com/design/IvXYzR9ZEwkgLkQEw5QLTp/Drury-Lane?node-id=0-1&t=ANR0iFzrEofZ9PSd-1",
      imgSrc: "/Images/drurylane.png",
      title: "Drury Lane Home Inspections",
      stack: "UX/UI Design",
    },
    {
      link: "https://www.sonshiptilesolutions.com/",
      imgSrc: "/Images/sonship.png",
      title: "Sonship Tile Solutions",
      stack: "UX/UI Design",
    },
    {
      link: "https://www.example.com/your-blog",
      imgSrc: "/Images/blogs.png",
      title: "Your Blog",
      stack: "UX/UI Design",
    },
  ];

  const filteredProjects = activeTab === "all"
    ? projects
    : activeTab === "projects"
    ? projects.filter(project => !project.stack.includes("UX/UI Design"))
    : projects.filter(project => project.stack.includes("UX/UI Design"));

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="tabs">
        <span
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
          style={{ color: 'var(--teal)', cursor: 'pointer', margin: '0 1rem' }}
        >
          All
        </span>
        <span
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
          style={{ color: 'var(--teal)', cursor: 'pointer', margin: '0 1rem' }}
        >
          Projects
        </span>
        <span
          className={activeTab === "ux/ui" ? "active" : ""}
          onClick={() => setActiveTab("ux/ui")}
          style={{ color: 'var(--teal)', cursor: 'pointer', margin: '0 1rem' }}
        >
          UX/UI
        </span>
      </div>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
