import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem 10rem;
  margin: 8 auto;
  button {
    height: 3rem;
    padding-inline: 2rem;
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;

    &hover {
      filter: brightness(0.9);
    }

    @media (max-width: 500px) {
      padding-inline: 0.5rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 900px) {
    padding-bottom: 20rem;

    img {
      width: 130px;
    }
  }

  @media (max-width: 600px) {
    padding-inline: 1.25rem;

    img {
      width: 110px;
    }
  }

  @media (max-width: 500px) {
    padding-bottom: 12.5rem;
  }
`;
