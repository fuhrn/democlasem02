import styled from "styled-components";

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  align-items: center;
  height: calc(80vh - 6rem - 8rem - 8rem);
`;

export const P = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
`;

export const H = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  color: #ffffff;
`;

export const Button = styled.button`
  width: fit-content;
  min-width: 10rem;
  height: fit-content;
  padding: 1rem 4rem;
  margin: -200px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 1rem;
  color: #fff;
  font-family: Raleway, sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #000;
    background-color: #ffffff;
  }
`;
