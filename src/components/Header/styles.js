import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  padding: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .icon {
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 4px;

    cursor: pointer;

    transition: all 0.2s ease;
    &:hover {
      background-color: var(--black-500);
      filter: brightness(0.6);
    }
  }
`;

export default Container;
