import React from "react";
import styled from "styled-components";

const HamburgerIcon = (props) => {
  const Line = styled.div`
    height: 0.1em;
    width: 1.5em;
    background-color: white;

    margin: 0.4em 0;
  `;

  const Container = styled.div`
    height: 3em;
    width: 3em;
    border-radius: 1.5em;
    border: 0.1em solid white;
    padding: 0.5em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition-duration: 0.7s;
  `;

  return (
    <Container>
      <Line />
      <Line />
    </Container>
  );
};

export default HamburgerIcon;
