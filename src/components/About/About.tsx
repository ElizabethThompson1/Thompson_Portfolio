import { useState } from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { data } from "./data";

export function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const text = `I'm Elizabeth Thompson, a Full Stack Developer based in Jacksonville, FL, with expertise in creating efficient, scalable web applications using React and Node.js. I specialize in JavaScript and TypeScript, building responsive, user-friendly front-end interfaces and robust back-end systems. My experience spans full-stack development, from designing intuitive user experiences to developing and integrating secure APIs, ensuring high performance and maintainability.`;

  const skills = data.skills;
  const certifications = data.certifications;
  const education = data.education;

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>{text}</p>
        </ScrollAnimation>

        <div className="tabs">
          <button onClick={() => setActiveTab("skills")} className={activeTab === "skills" ? "active" : ""}>
            Skills
          </button>
          <button onClick={() => setActiveTab("certifications")} className={activeTab === "certifications" ? "active" : ""}>
            Certifications
          </button>
          <button onClick={() => setActiveTab("education")} className={activeTab === "education" ? "active" : ""}>
            Education
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "skills" && (
            <div className="hard-skills">
              {skills.map((skill, index) => (
                <div className="hability" key={index}>
                  <ScrollAnimation animateIn="fadeInUp" delay={skill.delay * 1000}>
                    <img src={skill.icon} alt={skill.name} />
                    <div className="tooltip">{skill.name}</div>
                  </ScrollAnimation>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <ul className="certifications-list">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          )}

          {activeTab === "education" && (
            <ul className="education-list">
              {education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="about-image-container">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <div className="about-image">
            <img src="Images/coding.jpg" alt="Elizabeth Thompson" />
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
