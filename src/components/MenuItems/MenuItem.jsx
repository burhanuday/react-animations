import styled, { css } from "styled-components";

const MenuItem = styled.div`
  font-size: 4rem;
  font-weight: 400;
  position: relative;
  display: inline-block;
  opacity: 0.2;

  transform: translateY(${(props) => props.index * 30 + 20}%);

  transition: opacity 0.5s ease-in-out,
    transform 0.6s ${(props) => props.index * 0.1 + 0.6}s ease-in-out;

  ${(props) =>
    props.menuActive &&
    css`
      transform: translateY(0);
    `}

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

export default MenuItem;
