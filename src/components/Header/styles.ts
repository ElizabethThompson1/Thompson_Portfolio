import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 6rem; /* Reduced padding */
  background-color: #000000;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  .logo {
    display: flex;
    align-items: center;
    margin-right: auto;

    img {
      width: 7rem; /* Smaller logo */
      height: 7rem;
    }
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.8rem; /* Slightly reduced gap */
    margin-right: 1rem;

    a {
      color: #ffffff;
      padding: 0.4rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      font-size: 1.3rem; /* Reduced font size */
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: filter 0.25s, border-bottom 0.25s, color 0.25s;

      &.active {
        color: white;
      }

      &:hover {
        border-bottom: 2px solid #117d87;
      }
    }
  }

  /* Toggle Switch */
  .container_toggle {
    margin-left: 1.2rem; /* Slightly reduced margin */
    position: relative;
    display: flex;

    @media (max-width: 768px) {
      display: none; /* Hide toggle on small screens */
    }
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    width: 45px; /* Smaller toggle switch */
    height: 25px;
    background: #117d87;
    display: block;
    border-radius: 100px;
    position: relative;
    transition: background 320ms ease-in-out;
    margin-left: 1.2rem; /* Adjusted margin */
  }

  label:after {
    content: '';
    background: #ffffff;
    width: 16px; /* Reduced toggle circle */
    height: 16px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: left 320ms ease-in-out, background 320ms ease-in-out;
  }

  input[type="checkbox"]:checked + label {
    background: #117d87;
  }

  input[type="checkbox"]:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
    background: white;
  }

  /* Hamburger icon for small screens */
  .hamburger-icon {
    display: none;
    position: relative;
    width: 35px; /* Scaled down */
    height: 25px;
    cursor: pointer;
    z-index: 1001;
    transition: transform 0.3s ease-in-out;

    div {
      position: absolute;
      width: 100%;
      height: 3px; /* Reduced thickness */
      background-color: white;
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
    }

    .icon-1 {
      top: 0;
    }
    .icon-2 {
      top: 10px;
    }
    .icon-3 {
      top: 20px;
    }

    &.open .icon-1 {
      transform: rotate(45deg);
      top: 13px;
    }
    &.open .icon-2 {
      opacity: 0;
    }
    &.open .icon-3 {
      transform: rotate(-45deg);
      top: 13px;
    }
  }

  /* Light mode styles */
  html.light & {
    background-color: #ffffff;
    color: #000000;

    nav a {
      color: #000000;
    }

    .hamburger-icon div {
      background-color: black;
    }

    label {
      background: #000000;
    }

    label:after {
      background: #ffffff;
    }

    nav.active a {
      color: #000000 !important;
    }

    nav.active {
      background: rgba(255, 255, 255, 0.9);
    }
  }

  /* Tablet-specific adjustments */
  @media (max-width: 1024px) {
    padding: 1rem 4rem; /* Reduced padding for tablets */

    .logo img {
      width: 6rem; /* Smaller logo for tablets */
      height: 6rem;
    }

    nav a {
      font-size: 1.2rem; /* Reduced font size for tablets */
    }
  }

  /* Show hamburger and toggle only on small screens */
  @media (max-width: 768px) {
    .hamburger-icon {
      display: block;
      margin-right: -2rem; /* Adjusted margin for hamburger */
    }

    nav {
      display: none;
    }

    nav.active {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      height: 100vh;
      width: 60vw;
      background: rgba(0, 0, 0, 0.9);
      padding: 2rem;
      transition: all 0.3s ease-in-out;
      z-index: 999;

      a {
        display: block;
        margin-bottom: 1.5rem;
        text-align: center;
        color: #ffffff;
      }

      .container_toggle {
        display: block;
        margin-top: 2rem;
        margin-left: 0;
        justify-content: center;
      }
    }

    .logo {
      display: flex;
      align-items: left;
      margin-left: -4rem;
      margin-right: 12rem;

      img {
        width: 7rem; /* Smaller logo for mobile */
        height: 5.5rem;
      }
    }
  }
`;
