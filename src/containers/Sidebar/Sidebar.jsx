import React from "react";
import styled from "styled-components";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  padding: 2em;

  border-left: 1px solid rgba(255, 255, 255, 0.1);

  flex: 0.2;
`;

const Sidebar = (props) => {
  return (
    <Container>
      <HamburgerIcon />
    </Container>
  );
};

export default Sidebar;
