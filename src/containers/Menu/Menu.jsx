import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import { menuContext } from "../../contexts/menu";
import MenuList from "../../components/MenuItems/MenuItems";
import MenuItem from "../../components/MenuItems/MenuItem";

const Container = styled.div`
  display: flex;
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

const Metadata = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 3em 0;

  justify-content: space-between;
  align-items: flex-end;
`;

const Spacer = styled.div`
  flex: 0.3;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  border-bottom: none;
  margin-right: 0.5em;
`;

const menuItems = ["About", "Work", "Experience", "Education"];

const Menu = (props) => {
  const { state: menuState } = useContext(menuContext);
  const [activeItem, setActiveItem] = useState(-1);

  return (
    <Container active={menuState.active}>
      <Metadata>
        <div>Top</div>
        <div>bottom</div>
      </Metadata>
      <Spacer />
      <MenuList>
        {menuItems.map((item, index) => (
          <>
            <MenuItem
              menuActive={menuState.active}
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
