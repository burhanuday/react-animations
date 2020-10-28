import React from "react";
import styled from "styled-components";

import Menu from "../Menu/Menu";
import Sidebar from "../Sidebar/Sidebar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
`;

const Main = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Title = styled.h1`
  color: white;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 3rem;
`;

const Home = (props) => {
  return (
    <Container>
      <Main>
        <Title>Hello, I am Burhanuddin!</Title>
        <Menu />
      </Main>
      <Sidebar />
    </Container>
  );
};

export default Home;
