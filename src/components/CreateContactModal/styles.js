import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;

  label {
    & + input {
      margin: 0.6rem 0;
    }
  }

  input {
    width: 95%;
    height: 2.6rem;
    padding: 0.8rem;
    background-color: var(--black-300);

    border: none;
    border-radius: 4px;
  }

  button[type="submit"] {
    width: 100%;
    height: 2.6rem;
    margin-top: 1.2rem;
    color: white;
    background-color: var(--green-300);

    border: none;
    border-radius: 4px;

    transition: filter 0.2s ease;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default Container;
