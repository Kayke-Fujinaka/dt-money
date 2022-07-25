import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8 auto;
  padding: 2rem 2rem 12rem;

  button {
    height: 3rem;
    padding: 0 2rem;
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;

    &hover {
      filter: brightness(0.9);
    }
  }
`;
