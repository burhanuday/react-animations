import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { menuContext } from "../../contexts/menu";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: black;
  transform: translateY(100%);
  transition: transform 1.5s cubic-bezier(.8,0,.3,.99);

  ${(props) =>
    props.active &&
    css`
      transform: translateY(0%);
    `}
`;

const Menu = (props) => {
  const { state: menuState } = useContext(menuContext);

  return <Container active={menuState.active}>Menu</Container>;
};

export default Menu;
