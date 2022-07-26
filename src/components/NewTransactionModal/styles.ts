import styled from "styled-components";
import { darken } from "polished"

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: var(--shape);
    font-size: 1rem;
    font-weight: 600;
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-block: 1rem;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: transparent;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
  }
`;
