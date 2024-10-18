import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--white); /* Use white for better contrast */
  }

  .tabs {
    text-align: center; /* Center the tabs */
    margin-bottom: 2rem; /* Space below the tabs */
    
    span {
      color: #3EB8B2; /* Teal color for the tabs */
      font-size: 2.2rem; /* Font size for the tabs */
      margin: 0 1rem; /* Space between tabs */
      cursor: pointer; /* Pointer on hover */
      transition: color 0.3s; /* Smooth color transition */
    }

    .active {
      border-bottom: 2px solid #3EB8B2; /* Underline for active tab */
      font-weight: bold; /* Bold text for the active tab */
    }

    span:hover {
      color: var(--teal); /* Color on hover */
    }
  }

  .ag-format-container {
    width: 100%; /* Full width */
    max-width: 140rem; /* Max container width */
    margin: 0 auto; /* Center the container */
  }

  .ag-courses_box {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Spacing between project items */
    padding: 50px 0;
    justify-content: center; /* Center the cards */
  }

  .ag-courses_item {
    flex-basis: calc(33.33333% - 20px); /* 3 items per row */
    position: relative;
    overflow: hidden;
    border-radius: 28px;
    transition: transform 0.3s ease;
    background-color: #121212; /* Dark background for projects */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-5px);
    }

    .ag-courses-item_link {
      display: block;
      padding: 30px 20px;
      text-decoration: none;
      color: #3EB8B2;
      position: relative;
    }

    .ag-courses-item_bg {
      height: 128px;
      width: 128px;
      background-color: #3EB8B2;
      position: absolute;
      top: -75px;
      right: -75px;
      border-radius: 50%;
      transition: all 0.5s ease;
      z-index: -1; /* Behind the content */
    }

    .project-image {
      width: 100%;
      height: auto;
      border-radius: 28px; /* Match the item border radius */
      margin-bottom: 10px; /* Space between image and title */
      transition: transform 0.3s ease; /* For scaling effect */
    }

    /* Overlay styling */
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7); /* Dark semi-transparent overlay */
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3EB8B2;
      font-size: 2rem; /* Bigger font size for visibility */
      font-weight: bold;
      opacity: 0; /* Initially hidden */
      transition: opacity 0.3s ease; /* Fade effect */
      z-index: 1; /* On top of the image */
    }

    &:hover .overlay {
      opacity: 1; /* Show on hover */
    }

    .ag-courses-item_title {
      min-height: 87px;
      margin: 0 0 25px;
      font-weight: bold;
      font-size: 30px;
      color: var(--white);
      z-index: 2;
      position: relative;
    }

    .ag-courses-item_date-box {
      font-size: 18px;
      color: #fff; /* White for better contrast */
      z-index: 2;
      position: relative;
    }

    .ag-courses-item_date {
      font-weight: bold;
      color: #3EB8B2;
      transition: color 0.5s ease;
    }
  }

  /* Media Queries for smaller cards */
  
  @media (max-width: 1280px) {
    .ag-format-container {
      width: 90%; /* Reduced width for medium screens */
    }

    .ag-courses_item {
      flex-basis: calc(33% - 20px); /* 3 items per row */
    }
  }

  @media (max-width: 960px) {
    .ag-format-container {
      width: 85%; /* Adjust the container width */
    }

    .ag-courses_item {
      flex-basis: calc(50% - 20px); /* 2 items per row */
    }
  }

  @media (max-width: 740px) {
    .ag-format-container {
      width: 90%; /* Adjust width for mobile screens */
    }

    .ag-courses_item {
      flex-basis: calc(50% - 20px); /* Keep 2 items per row */
      margin: 0 auto; /* Centered */
    }
  }

  @media (max-width: 600px) {
    .ag-courses_item {
      flex-basis: 100%; /* Single item per row on small screens */
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .ag-format-container {
      padding: 0 1rem; /* Add padding for smaller screens */
    }

    .ag-courses_item {
      flex-basis: 100%; /* Single item per row */
      margin: 0 auto; /* Center the single item */
    }
  }
`;
