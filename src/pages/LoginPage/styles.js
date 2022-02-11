import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  a {
    padding: 0.6rem;
    background-color: var(--black-300);

    font-size: 1.2rem;
    color: white;
    text-decoration: none;

    border-radius: 4px;
    transition: filter 0.2s ease;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default Container;
