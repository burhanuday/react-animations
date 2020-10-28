import React from "react";
import styled from "styled-components";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 2em 0em;

  flex: 0.1;
`;

const Sidebar = (props) => {
  return (
    <Container>
      <HamburgerIcon />
    </Container>
  );
};

export default Sidebar;
