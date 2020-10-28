import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { menuContext } from "../../contexts/menu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  position: absolute;
  background-color: black;
  transform: translateY(100%);
  transition: transform 1.5s cubic-bezier(0.8, 0, 0.3, 0.99);

  ${(props) =>
    props.active &&
    css`
      transform: translateY(0%);
    `}
`;

const MenuList = styled.nav``;

const MenuItem = styled.a`
  font-size: 4rem;
  font-weight: 400;
  position: relative;
  display: inline-block;
  opacity: 0.2;

  transition: opacity 0.5s ease-in-out;

  ${(props) =>
    (props.index === props.activeItem || props.activeItem === -1) &&
    css`
      opacity: 1;
    `}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0;
    background-color: white;
    transition: width 0.6s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const menuItems = ["About", "Work", "Experience", "Education"];

const Menu = (props) => {
  const { state: menuState } = useContext(menuContext);
  const [activeItem, setActiveItem] = useState(-1);

  return (
    <Container active={menuState.active}>
      <MenuList>
        {menuItems.map((item, index) => (
          <>
            <MenuItem
              onMouseOver={() => setActiveItem(index)}
              onMouseOut={() => setActiveItem(-1)}
              index={index}
              activeItem={activeItem}
            >
              {item}
            </MenuItem>
            <br />
          </>
        ))}
      </MenuList>
    </Container>
  );
};

export default Menu;
