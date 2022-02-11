import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --black-100: #737875;
    --black-300: #4b4b4b;
    --black-500: #2b2b2b;
    --black-700: #0a0a0a;
    
    --green-300: #4DBA1A;
}
 * {
     margin: 0%;
     padding: 0;
     box-sizing: 0;
 }
 html{
     margin: 0%;
     padding: 0;
     @media (max-width: 1080px) {
        font-size: 93.75%;
     }

     @media (max-width: 720px) {
         font-size: 87.5%;
     }

     &::-webkit-scrollbar-track {
      background: var(--black-500);
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--black-300);
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--black-100);
    }

    &::-webkit-scrollbar {
      width: 4px;
    }
 }

 body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--black-700); 
 }

 body, label, input, textarea {
     font-family: 'Poppins', sans-serif;
     color:white;
     font-weight: 400;
 }

 h1, h2 {
    font-family: 'Poppins', sans-serif;
    color:white;
    font-weight: 600;
 }

 h3, h4 {
     font-family: 'Poppins', sans-serif;
     color:white;
     font-weight: 400;
 }

 h5, h6 {
     font-family: 'Poppins', sans-serif;
     color:white;
     font-weight: 400;
 }
 
  p, strong, li {
     font-family: 'Poppins', sans-serif;
     font-weight: 400;
 }

 button {
    background-color: none;

    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    
    cursor: pointer;
 }

 [disabled] {
     opacity: 0.6;
     cursor: not-allowed;
 }

 .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
 }

 .react-modal-content {
    overflow-y: auto;
    width: 80%;
    max-width: 576px;
    background: var(--black-500);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
 }

 .react-modal-content-spinner {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 }

 .react-modal-close {
     position: absolute;
     right: 1.5rem;
     top: 1.5rem;
     border: 0;
     background: transparent;

     transition: filter 0.2s;
     &:hover {
         filter: brightness(0.8);
     }
 }
`;

export default GlobalStyle;
