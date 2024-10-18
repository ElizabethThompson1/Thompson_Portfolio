import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-top: 10rem;

  .hero-text {
    display: flex;
    flex-direction: column;

    .intro-text {
      font-size: 3rem;
    }

    .hero-name {
      font-size: 7rem;
      margin-right: 30px;
    }

    .title-container {
      position: relative;
      height: 5rem;
      overflow: hidden; /* Ensure titles don't overflow */
    }

    .hero-title {
      font-size: 4rem;
      color: var(--teal);
      position: absolute;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease;
      white-space: nowrap;
    }

    /* Sliding animation for titles */
    .slide-in {
      transform: translateY(0);
      opacity: 1;
    }

    .slide-out {
      transform: translateY(-100%);
      opacity: 0;
    }

    .small-resume {
      font-size: 2rem;
      margin-top: 1rem;
    }

    .button-container {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .button {
      padding: 0.6rem 2rem;
      background-color: var(--teal);
      color: var(--white);
      text-decoration: none;
      border-radius: 5px;
      display: flex;
      align-items: center;

      .icon {
        margin-right: 0.5rem;
      }
    }
  }

  .social-media {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    img {
      width: 40px;
    }
  }

  .hero-image {
    img {
      max-width: 500px;
    }
  }

  /* Media Queries for different screen sizes */

  @media (max-width: 1280px) {
    .hero-text {
      .hero-name {
        font-size: 6rem;
      }

      .hero-title {
        font-size: 3.5rem;
      }

      .intro-text {
        font-size: 2.5rem;
      }

      .small-resume {
        font-size: 1.8rem;
      }
    }

    .hero-image img {
      max-width: 450px;
    }
  }

  @media (max-width: 1024px) {
    padding-top: 8rem;
    .hero-text {
      .hero-name {
        font-size: 5rem;
      }

      .hero-title {
        font-size: 3rem;
      }

      .intro-text {
        font-size: 2.2rem;
      }

      .small-resume {
        font-size: 1.6rem;
      }
    }

    .hero-image img {
      max-width: 400px;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding-top: 13rem;

    .hero-text {
      .hero-name {
        font-size: 4.5rem;
      }

      .hero-title {
        font-size: 2.8rem;
      }

      .intro-text {
        font-size: 2rem;
      }

      .small-resume {
        font-size: 1.5rem;
      }
    }

    .hero-image {
      margin-top: 2rem;
      img {
        max-width: 350px;
      }
    }
  }

  @media (max-width: 768px) {
  padding-top: 13rem;

    .hero-text {
      .hero-name {
        font-size: 4rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .intro-text {
        font-size: 1.8rem;
      }

      .small-resume {
        font-size: 1.4rem;
      }
    }

    .hero-image img {
      max-width: 300px;
    }
  }

  @media (max-width: 600px) {
    padding-top: 13rem;

    .hero-text {
      .hero-name {
        font-size: 3.5rem;
      }

      .hero-title {
        font-size: 2.2rem;
      }

      .intro-text {
        font-size: 1.6rem;
      }

      .small-resume {
        font-size: 1.2rem;
      }
    }

    .hero-image img {
      max-width: 250px;
    }
  }

  @media (max-width: 480px) {
    padding-top: 10rem;

    .hero-text {
      .hero-name {
        font-size: 3rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .intro-text {
        font-size: 1.5rem;
      }

      .small-resume {
        font-size: 1.1rem;
      }
    }

    .hero-image img {
      max-width: 220px;
    }
  }
`;
