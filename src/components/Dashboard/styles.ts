import styled from "styled-components";

export const Container = styled.header`
  padding: 2.5rem 5rem;
  margin: 8 auto;

  @media (max-width: 600px) {
    padding-inline: 1.25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8 auto;
  padding: 2rem 2rem 12rem;
`;
