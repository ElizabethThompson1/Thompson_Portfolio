import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: black;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  .about-text {
    flex: 0 0 40%;
    margin-left: 12rem;

    h2 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--teal);
    }

    p {
      margin: 1rem 0;
      line-height: 1.5;
      color: #fff;
    }

    .tabs {
      display: flex;
      gap: 10px;
      margin: 20px 0;

      button {
        padding: 12px 25px;
        font-size: 1.8rem; /* Reduced initial font size */
        font-weight: bold;
        cursor: pointer;
        border: none;
        background-color: transparent;
        color: #fff;
        position: relative;

        &.active {
          color: var(--teal);
        }

        &:hover {
          color: var(--teal);
        }

        &::after {
          content: '';
          display: block;
          height: 2px;
          width: 100%;
          background: var(--teal);
          position: absolute;
          left: 0;
          bottom: -5px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        &.active::after {
          transform: scaleX(1);
        }
      }
    }

    .hard-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .hability {
      width: calc(22.222% - 20px);
      display: flex;
      justify-content: center;
      position: relative;

      img {
        width: 50px;
        height: 50px;
        transition: transform 0.3s;
      }

      img:hover {
        transform: scale(1.1);
      }

      /* Tooltip */
      .tooltip {
        visibility: hidden;
        width: auto;
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 5px;
        border-radius: 5px;
        position: absolute;
        bottom: 120%;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }
    }

    .certifications-list,
    .education-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      padding-left: 0;
      color: #fff;

      li {
        list-style-type: disc;
        margin: 5px 0;
        padding-left: 20px;
      }
    }
  }

  .about-image-container {
    flex: 0 0 60%;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;

    .about-image {
      transition: transform 0.3s;

      img {
        width: 60%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  /* Media queries for smaller screens */
  @media (max-width: 960px) {
    display: block; /* Stack the content vertically */
    margin-top: 10%; /* Adjust the margin for smaller screens */

    .about-text {
      margin-left: 0;
      text-align: center; /* Center the text for smaller screens */

      .tabs {
        button {
          font-size: 1.5rem; /* Reduce font size for tabs */
          padding: 8px 15px; /* Reduce padding for tabs */
        }
      }
    }

    .about-image-container {
      margin-top: 3rem; /* Add space between text and image */
      .about-image img {
        width: 80%; /* Reduce image size for smaller screens */
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 25%; /* Adjust the margin for even smaller screens */

    .about-text {
      h2 {
        font-size: 2.5rem; /* Reduce heading size */
      }

      p {
        font-size: 1.8rem; /* Reduce paragraph size */
      }

      .tabs {
        button {
          font-size: 1.3rem; /* Further reduce font size for tabs */
          padding: 6px 12px; /* Further reduce padding for tabs */
        }
      }
    }

    .about-image-container {
      .about-image img {
        width: 90%; /* Further reduce image size */
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 30%; /* Adjust for very small screens */

    .about-text {
      h2 {
        font-size: 2rem; /* Further reduce heading size */
      }

      p {
        font-size: 1.6rem; /* Further reduce paragraph size */
      }

      .tabs {
        button {
          font-size: 1.1rem; /* Even smaller font size for very small screens */
          padding: 5px 10px; /* Small padding for tabs */
        }
      }
    }

    .about-image-container {
      .about-image img {
        width: 100%; /* Make the image full width */
      }
    }
  }
`;
