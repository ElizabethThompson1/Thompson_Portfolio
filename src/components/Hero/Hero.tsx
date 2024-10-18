import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import Hello from '../../assets/Hello.gif';
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import Resume from '../../assets/Elizabeth Thompson_Resume.pdf';

export function Hero() {
  const titles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UX/UI Designer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true); // Start sliding out
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length); // Change the title
        setIsSliding(false); // Reset sliding effect
      }, 500); // Duration for the slide up before changing title
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="intro-text">
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1 className="hero-name">Elizabeth Thompson</h1>
        </ScrollAnimation>

        <div className="title-container">
          {/* Sliding title */}
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3 className={`hero-title ${isSliding ? 'slide-out' : 'slide-in'}`}>
              {titles[currentTitleIndex]}
            </h3>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">5 Years of Experience</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <div className="button-container">
              <a href={Resume} download className="button">
                <MdDownload className="icon" /> Get Resume
              </a>
              <NavHashLink smooth to="#contact" className="button">
                <RiContactsFill className="icon" /> Contact
              </NavHashLink>
            </div>
          </BrowserRouter>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/elizabeth-thompson-07314b275/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/ElizabethThompson1" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src='/Images/me.png' alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
