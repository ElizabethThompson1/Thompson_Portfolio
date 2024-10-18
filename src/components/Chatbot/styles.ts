import styled from 'styled-components';

export const ChatbotContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align to the right */
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px; /* Increased width for larger chatbot */
  z-index: 1000;

  .chatbot-header {
    background-color: #3EB8B2; /* Chatbot header color */
    color: white;
    padding: 20px; /* Increased padding */
    border-radius: 50%; /* Circular background */
    cursor: pointer; /* Indicate it's clickable */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Increased shadow */
    transition: background-color 0.3s ease; /* Smooth transition */
    font-size: 2rem; /* Increased font size */
    
    &:hover {
      background-color: #339f99; /* Darker on hover */
    }
  }

  .chatbot-box {
    display: flex;
    flex-direction: column;
    padding: 20px; /* Increased padding */
    background-color: #121212; /* Match the main background */
    border-radius: 10px; /* Increased round corners */
    margin-top: 10px; /* Space between icon and chatbox */

    .chatbot-top {
      display: flex;
      align-items: center;
      margin-bottom: 15px; /* Increased space between header and messages */

      .profile-image {
        width: 50px; /* Increased image size */
        height: 50px;
        border-radius: 50%; /* Circular image */
        margin-right: 15px; /* Increased space between image and time */
      }

      .current-time {
        color: #3EB8B2; /* Text color */
        font-size: 1.5rem; /* Increased font size */
      }
    }

    .chatbot-messages {
      padding: 10px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 15px; /* Increased space between messages */
      height: 400px; /* Increased height */
    }

    .chatbot-message {
      padding: 12px 15px; /* Increased padding */
      border-radius: 8px; /* Increased round corners */
      max-width: 90%; /* Increased maximum width */
      position: relative;
      color: white;
      font-size: 1.3rem; /* Increased font size */

      &.user {
        background-color: #3EB8B2; /* User message color */
        align-self: flex-end;
      }

      &.bot {
        background-color: #f1f1f1; /* Bot message color */
        color: #333;
        align-self: flex-start;
      }
    }

    .chatbot-input {
      display: flex;
      padding: 15px; /* Increased padding */

      input {
        flex: 1;
        padding: 12px; /* Increased padding */
        border: none;
        border-radius: 5px;
        outline: none;
        margin-right: 15px; /* Increased space */
        background-color: #fff; /* Input background color */
        color: #333; /* Input text color */
        font-size: 1.2rem; /* Increased font size */
      }

      button {
        padding: 12px 24px; /* Increased padding */
        border: none;
        border-radius: 5px;
        background-color: #3EB8B2; /* Button color */
        color: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 1.5rem; /* Increased font size */

        &:hover {
          background-color: #339f99; /* Darker on hover */
        }
      }
    }
  }
`;
