import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 5rem; 
    font-weight: bold; 
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: .5rem;
      outline: none;
      border: none;
      background: none;
      border: 3px solid #FFF;
      color: white;
      font-weight: 600; /* Made it bolder */
      &::placeholder {
        color: #FFF;
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1rem 6rem;
      font-size: 1.5rem; 
      font-weight: bold; 
    }
  }

  @media (max-width: 740px) {
    form {
      width: 100%;
      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export const ContainerSuccess = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.2rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
    font-size: 1.5rem; /* Increased font size */
    font-weight: bold; /* Made it bold */
  }
`;
