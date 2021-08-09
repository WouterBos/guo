import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  grid-template-columns: [narrow] minmax(25rem, 25vw) [wide] 1fr;
  min-height: 100vh;
  color: white;
  font-size: calc(0.8rem + 1vmin);
  background-color: #2e2728;

  @media (max-width: 1024px) {
    grid-template-columns: [wide] 1fr;
  }
`;
