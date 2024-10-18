import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 3rem; /* Increased font size */
    font-weight: bold; /* Made it bold */
    color: #3EB8B2; /* Blue-green color for the name */
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem; /* Increased font size */
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3rem;
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Media Queries */
  @media (max-width: 1200px) {
    padding: 3rem 12rem;
    .logo {
      font-size: 2.8rem; /* Smaller logo for medium-large screens */
    }
    p {
      font-size: 1.4rem; /* Slightly reduced paragraph size */
    }
  }

  @media (max-width: 1000px) {
    padding: 3rem 8rem;
    .logo {
      font-size: 2.5rem; /* Smaller logo for medium screens */
    }
    p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 800px) {
    padding: 4rem 6rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    .logo {
      font-size: 2.3rem;
    }
    p {
      font-size: 1.2rem; /* Slightly smaller text for smaller screens */
    }
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;
    .logo {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem; /* Further reduced font size */
    }
    .social-media img,
    .social-media span {
      width: 2.5rem; /* Smaller social media icons */
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
    .logo {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
    .social-media img,
    .social-media span {
      width: 2rem; /* Even smaller icons for very small screens */
    }
  }
`;
