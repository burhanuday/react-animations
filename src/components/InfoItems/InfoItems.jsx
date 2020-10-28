import styled, { css } from "styled-components";

import { menuItems } from "../../mock/data";
import { animated, useSpring, useTransition } from "react-spring";
import { useEffect, useState } from "react";

const InfoItem = styled(animated.div)`
  text-align: right;
`;

const OverflowContainer = styled.div`
  overflow: hidden;
`;

const InfoItemContainer = styled.div`
  position: absolute;
  right: 0;
  height: 10em;
  width: 10em;
`;

const Container = styled.div`
  position: relative;
  height: 10em;
  width: 10em;
`;

const Services = styled(animated.div)`
  font-size: 0.6rem;
  text-align: right;
  position: absolute;
  right: 0;
`;

const InfoItems = ({ activeItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = menuItems.filter((item, i) => i === activeItem);
    setItems(newItems);
  }, [activeItem]);

  const transitions = useTransition(items, (menuItem) => menuItem.title, {
    from: { transform: "translateY(-5em)" },
    enter: { transform: "translateY(0em)" },
    leave: { transform: "translateY(-5em)" },
  });

  const transition = useTransition(activeItem === -1, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Container key="container">
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <Services key={key} style={props}>
              Services
            </Services>
          )
      )}

      {transitions.map(({ item, props, key }) => (
        <InfoItemContainer key={key}>
          {item.info.map((infoItem) => (
            <OverflowContainer key={infoItem}>
              <InfoItem style={props}>{infoItem}</InfoItem>
            </OverflowContainer>
          ))}
        </InfoItemContainer>
      ))}
    </Container>
  );
};

export default InfoItems;
