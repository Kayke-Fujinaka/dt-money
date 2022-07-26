import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.5rem;
  
  div {
    padding: 1.5rem 2rem;
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
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background {
        background-color: var(--green);
        color: var(--shape);
    }
  }
`;
