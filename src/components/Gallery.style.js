import styled from "styled-components";

export const Gallery = styled.article`
  grid-column-start: 2;
  grid-column-end: 2;
  position: relative;
  padding: 2rem 4vw;
  text-align: center;

  @media (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 1;
    padding: 2rem 0;
  }
`;

export const Figure = styled.figure`
  display: inline-block;
  margin-top: 6rem;
  text-align: center;

  @media (max-width: 1024px) {
    margin: 6rem 0 0 0;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 15rem);
  box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.8);

  @media (max-width: 1024px) {
    max-width: 100vw;
    max-height: unset;
  }
`;

export const Picture = styled.picture`
  margin-bottom: 1rem;
`;

export const Caption = styled.span`
  width: 100%;
`;

export const Tip = styled.span`
  opacity: 0;
  font-size: 1rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;

  &:hover ${Tip} {
    opacity: 0.6;
  }
`;

export const Button = styled.button`
  border-width: 0;
  color: #fff;
  font-size: 2.5rem;
  margin: 0 2rem 0 0;
  padding: 0 2rem 0.3rem 2rem;
  background: #cc112f;

  &:disabled {
    opacity: 0.5;
  }
`;
