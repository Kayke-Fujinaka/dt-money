import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  padding: 2rem 5rem 12rem;
  margin: 8 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
;

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
