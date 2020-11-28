import { useTrail, animated, config } from "react-spring";
import styled from "styled-components";
import { menuItems } from "../../mock/data";

const Container = styled(animated.div)`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;

  z-index: -1;
  height: 200px;
  width: 300px;
`;

const Image = styled.img`
  height: 200px;
  width: 300px;
  z-index: -1;
  object-fit: cover;
`;

const CursorImage = ({ activeItem, mouseCoordinates: { x, y } }) => {
  const trail = useTrail(1, {
    left: `${x - 250}px`,
    top: `${y - 50}px`,
    config: config.molasses
  });

  return trail.map((props, index) => (
    <Container x={x - 250} y={y - 50} style={props} key={index}>
      {activeItem !== -1 && <Image src={menuItems[activeItem].imageUrl} />}
    </Container>
  ));
};

export default CursorImage;
