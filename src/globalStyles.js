import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: #1b1b1b;
    font-family: "Lato", sans-serif;
  }

  h2 {
    font-weight: lighter;
    font-size: 3rem;
  }

  h4 {
    font-weight: bold;
    font-size: 2rem;
  }

  span {
    font-weight: bold;
    color: #23d997;
  }
  
  p {
    padding: 1.5rem 0;
    color: #ccc;
    font-size: 1.25rem;

  }

  a {
    font-size: 1.1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin-inline: auto;
  padding: 30px 15px;
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  color: #fff;
  outline: none;
  border: none;
  background: transparent;
  border: 3px solid #23d997;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: #23d997;
    color: #fff;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  min-height: 90vh;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default GlobalStyle;
