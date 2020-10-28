import styled, { css } from "styled-components";

import { menuItems } from "../../mock/data";
import { animated, useSpring, useTransition } from "react-spring";
import { useEffect, useState } from "react";

const Index = styled(animated.div)`
  opacity: ${(props) => (props.activeItem === -1 ? 0.1 : 1)};
  font-size: 2rem;
`;

const OverflowContainer = styled.div`
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Container = styled.div`
  position: relative;
`;

const indexes = [-1, 0, 1, 2, 3];

const MenuIndex = ({ activeItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = indexes.filter((item) => item === activeItem);
    setItems(newItems);
  }, [activeItem]);

  const transitions = useTransition(items, (i) => i, {
    from: { transform: "translateX(5em)" },
    enter: { transform: "translateX(0em)" },
    leave: { transform: "translateX(5em)" },
  });

  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <OverflowContainer key={key}>
          <Index activeItem={item} style={props}>
            0{item === -1 ? menuItems.length : item + 1}
          </Index>
        </OverflowContainer>
      ))}
    </Container>
  );
};

export default MenuIndex;
