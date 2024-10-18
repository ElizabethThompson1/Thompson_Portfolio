import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --teal: #3EB8B2; /* Teal for buttons */
    --darkSlate: black; /* Dark green-blue background */
    --lightSlate: #95b0b4; /* Lighter slate */
    --brown: #95664c; /* Brown */
    --softPink: #cd9a7d; /* Soft pink */
    --white: #FFFFFF; /* White for text */
    --gray: #f5f5f5; /* Light gray background */
    --darkGray: #212121; /* Dark gray for text */
    scroll-padding-top: 10rem;

    &.light {
      body {
        transition: 0.5s;
        background-color: var(--gray); /* Lighter background */
        color: var(--darkSlate);
      }

      .logo {
        color: var(--darkSlate);
      }

      header.header-fixed {
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.85); /* Light transparent background */
        a {
          transition: 0.5s;
          color: var(--darkSlate);
        }
        .menu, .menu:before, .menu:after {
          background-color: var(--darkSlate);
        }
        .menu.active {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }

      footer.footer {
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.8); /* Lighter footer background */
        color: var(--darkSlate);
      }

      form {
        input, textarea {
          transition: 0.5s;
          border: solid 1px var(--darkSlate);
          color: var(--darkSlate);
          &::placeholder {
            transition: 0.5s;
            color: var(--lightSlate);
          }
        }
      }
    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* For easy rem calculations */
  }

  body {
    font-size: 1.6rem; /* Base font size */
    -webkit-font-smoothing: antialiased; /* Smooth text */
    background-color: var(--darkSlate); /* Darker slate background */
    color: var(--white); /* Default text color */
  }

  body, input, textarea, button {
    font-family: 'Red Hat Display', sans-serif; /* Font family */
    font-weight: 400; /* Normal font weight */
  }

  a {
    text-decoration: none; /* No underlines on links */
  }

  button, .button {
    border: none; /* No border */
    cursor: pointer; /* Pointer on hover */
    background-color: var(--teal); /* Button color */
    color: var(--white); /* Text color on button */
    border-radius: 0.6rem; /* Rounded corners */
    font-weight: 500; /* Medium font weight */
    transition: transform 0.3s ease, filter 0.25s, background-color 0.3s ease; /* Transition for hover effects */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Add shadow for depth */

    /* Adjust for dark mode visibility */
    background-color: var(--teal); /* Button color */
    color: var(--white); /* Text color on button */

    &:hover {
        filter: brightness(0.9); /* Slightly lighten button on hover for visibility */
        transform: translateY(-2px); /* Slightly lift the button */
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Increase shadow on hover */
    }
}

button:disabled, .button:disabled {
    filter: brightness(0.6); /* Darken disabled button */
    cursor: not-allowed; /* Show not-allowed cursor */
}


  .logo {
    font-size: 3rem; /* Larger font size for logo */
    color: var(--softPink); /* Bright soft pink logo */
  }
`;
