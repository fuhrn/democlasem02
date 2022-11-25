import styled from "styled-components";
import Layout from "./Layout";

const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  align-items: center;
  /* height: calc(100vh - 6rem - 8rem - 8rem); */
`;

const P = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
`;

const H = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  color: #ffffff;
`;

const Button = styled.button`
  width: fit-content;
  min-width: 10rem;
  height: fit-content;
  padding: 1rem 4rem;
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

function Contact() {
  return (
    <Layout>
      <Content>
        <H>Contact Page</H>
        <P>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </P>
        <Button>Ver más</Button>
      </Content>
    </Layout>
  );
}

export default Contact;
