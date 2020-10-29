import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import { menuContext } from "../../contexts/menu";
import MenuList from "../../components/MenuItems/MenuItems";
import MenuItem from "../../components/MenuItems/MenuItem";
import { menuItems } from "../../mock/data";
import InfoItems from "../../components/InfoItems/InfoItems";
import MenuIndex from "../../components/MenuIndex/MenuIndex";
import CursorImage from "../../components/CursorImage/CursorImage";

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
    `};
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

const Menu = (props) => {
  const { state: menuState } = useContext(menuContext);
  const [activeItem, setActiveItem] = useState(-1);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    console.log("onMouseMove", e.nativeEvent.clientX, e.nativeEvent.clientY);
    setActiveItem(index);
    setMouseCoordinates({
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY,
    });
  };

  return (
    <Container active={menuState.active}>
      <Metadata>
        <div>
          <InfoItems key="info-items" activeItem={activeItem} />
        </div>
        <MenuIndex activeItem={activeItem} />
      </Metadata>
      <Spacer />
      <MenuList>
        {menuItems.map((item, index) => (
          <>
            <MenuItem
              key={`${index}`}
              menuActive={menuState.active}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseOut={() => setActiveItem(-1)}
              index={index}
              activeItem={activeItem}
            >
              {item.title}
            </MenuItem>
            <br key={`br-${index}`} />
          </>
        ))}
      </MenuList>

      <CursorImage
        activeItem={activeItem}
        mouseCoordinates={mouseCoordinates}
      />
    </Container>
  );
};

export default Menu;
