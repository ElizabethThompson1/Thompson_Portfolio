import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg"; // Ensure this path is correct
import phoneIcon from "../../assets/phone-icon.svg"; // Ensure this path is correct
import { Form } from "../Form/Form";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';

export function Contact() {
  return (
    <Container id="contact">
      <div className="contact-info">
        <div className="about-section">
          <h2>Let's Connect</h2>
          <p>
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contacts">
            <div>
              <img src={emailIcon} alt="Email" />
              <span>Thompsone21@yahoo.com</span>
            </div>
            <div>
              <img src={phoneIcon} alt="Phone" />
              <span>(702) 366-6004</span>
            </div>
            <div className="social-icons">
              <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </Container>
  );
}
