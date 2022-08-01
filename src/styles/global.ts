import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933ff;

        --text-title: #363f3f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 85%;
        }

        @media (max-width: 720px) {
            font-size: 80%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // Funciona apenas no macOS. Ele suaviza a fonte.
    }
    
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    strong, h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .react-modal-content {
        position: relative;
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        background-color: var(--background);
        border-radius: 0.25rem;

        @media (max-width: 600px) {
            max-width: 350px;
        }
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
