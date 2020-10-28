import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { menuContext } from "../../contexts/menu";

const Line = styled.div`
  height: 0.1em;
  width: 1.4em;
  background-color: white;

  margin: 0.4em 0;

  transition: all 0.8s linear;

  ${(props) =>
    props.menuActive &&
    css`
      background-color: black;

      transform: rotate(${props => props.index * 45}deg);
      margin: 0;
    `}
`;

const Container = styled.div`
  height: 3em;
  width: 3em;
  border-radius: 1.5em;
  border: 0.1em solid white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition-duration: 0.7s;

  ${(props) =>
    props.menuActive &&
    css`
      background-color: white;
    `}
`;

const HamburgerIcon = (props) => {
  const { state: menuState, dispatch } = useContext(menuContext);

  return (
    <Container
      menuActive={menuState.active}
      onClick={() => dispatch({ type: "TOGGLE_MENU" })}
    >
      <Line index={1} menuActive={menuState.active} />
      <Line index={-1} menuActive={menuState.active} />
    </Container>
  );
};

export default HamburgerIcon;
