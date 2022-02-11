import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  #title-container {
    width: 70%;
    margin: 4rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    h1 {
      font-size: 3rem;
    }
  }

  #contacts-wrapper {
    width: 99%;
    margin: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--black-500);

    border-radius: 4px;

    .contact-container {
      width: 90%;
      @media (min-height: 2160px) {
        height: 40px;
      }

      @media (max-height: 768px) {
        height: 20px;
      }
      margin: 0.6rem;
      padding: 1rem 1.2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      background-color: var(--black-300);

      border-radius: 4px;

      .icons-container {
        width: 8%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      & + .contact-container {
        margin-top: 0.6rem;
      }
    }
  }

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
