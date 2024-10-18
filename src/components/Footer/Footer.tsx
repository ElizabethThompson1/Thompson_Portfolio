import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'


export function Footer() {
  return (
    <Container className="footer">
      <a href="https://vinayaksingh.in" className="logo">
        <span>Elizabeth Thompson</span>
      </a>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/codevinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
