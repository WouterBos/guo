import styled from "styled-components";

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-column-start: 1;
  grid-column-end: 1;
  background-color: #cc112f;
`;

export const Text = styled.div`
  flex-grow: 1;
  padding: 1rem 1.5rem;
`;

export const Cc = styled.div`
  img {
    float: left;
  }
`;

export const Logo = styled.img`
  max-width: 27rem;
  padding: 1rem 1.5rem;
`;

export const Link = styled.a`
  color: #fff !important;
`;
