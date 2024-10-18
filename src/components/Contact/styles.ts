import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  display: flex;
  gap: 4rem;

  .contact-info {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    width: 100%;

    .about-section {
      flex: 1;
      max-width: 90rem;
      padding: 3rem;

      h2 {
        font-size: 6rem;
        color: #3EB8B2;
        margin-left: 0;
      }

      p {
        font-size: 2rem;
        margin-top: 1rem;
        line-height: 1.5;
      }

      .contacts {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        div {
          display: flex;
          gap: 1.5rem;

          img {
            width: 40px;
            height: 40px;
          }

          span {
            color: var(--black);
            font-size: 2rem;
            font-weight: 500;
          }
        }

        div:first-child img,
        div:nth-child(2) img {
          filter: invert(47%) sepia(51%) saturate(300%) hue-rotate(135deg) brightness(90%) contrast(85%);
        }

        .social-icons {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;

          a {
            img {
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }

    form {
      flex: 1;
      padding: 3rem;
    }
  }

  /* Media Queries for smaller screens */
  @media (max-width: 960px) {
    flex-direction: column; /* Stack the contact-info and form vertically */
    gap: 2rem;

    .contact-info {
      flex-direction: column; /* Stack the contact-info and form vertically */
      align-items: center;
      text-align: center;

      .about-section {
        width: 100%; /* Full width on smaller screens */
        h2 {
          font-size: 5rem; /* Adjust font size for smaller screens */
        }

        p {
          font-size: 1.8rem; /* Adjust paragraph font size */
        }

        .contacts {
          div {
            img {
              width: 35px; /* Scale down icons */
              height: 35px;
            }

            span {
              font-size: 1.8rem;
            }
          }

          .social-icons img {
            width: 35px;
            height: 35px;
          }
        }
      }

      form {
        width: 100%; /* Form takes full width */
        padding: 2rem; /* Adjust padding for smaller screens */
      }
    }
  }

  @media (max-width: 600px) {
    .contact-info {
      .about-section {
        h2 {
          font-size: 4rem; /* Further scale down heading */
        }

        p {
          font-size: 1.6rem; /* Further adjust paragraph font size */
        }

        .contacts div img {
          width: 30px; /* Smaller icons */
          height: 30px;
        }

        .social-icons img {
          width: 30px;
          height: 30px;
        }
      }

      form {
        width: 100%;
        padding: 1.5rem; /* Adjust padding on mobile screens */
      }
    }
  }
`;
