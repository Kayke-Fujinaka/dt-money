import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: -7.5rem;

  div {
    padding: 1.5rem 2rem;
    min-width: 200px;
    color: var(--text-title);
    background-color: var(--shape);
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: inline-block;
      margin-top: 1rem;
      font-size: 1.75rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: var(--shape);
    }

    @media (max-width: 900px) {
      padding: 1rem;
      font-size: 1.15rem;

      strong {
        font-size: 1.25rem;
        margin-top: 0;
      }
    }

    @media (max-width: 500px) {
      padding: 0.75rem;
      font-size: 1rem;

      strong {
        font-size: 1.1rem;
        line-height: 1.25rem;
      }

      img {
        width: 25px;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: -16.5rem;
  }

  @media (max-width: 500px) {
    gap: 1rem;
    margin-top: -11rem;
  }
`;
