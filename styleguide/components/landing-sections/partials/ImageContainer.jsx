import React from "react";
import styled from "styled-components";
import remcalc from "remcalc";
import Plx from "react-plx";
import backCloud from "../../assets/back-cloud.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;

  .kawaii-container {
    position: absolute;
  }
`;

const UseCases = ({ children, start, end }) => {
  const AnimBackCloud = [
    {
      start: start,
      end: end,
      properties: [
        {
          startValue: 0,
          endValue: -30,
          property: "translateY"
        }
      ]
    }
  ];

  const AnimKawaii = [
    {
      start: start,
      end: end,
      properties: [
        {
          startValue: 0,
          endValue: 30,
          property: "translateY"
        }
      ]
    }
  ];

  return (
    <Container>
      <Plx parallaxData={AnimBackCloud}>
        <img src={backCloud} />
      </Plx>
      <Plx className="kawaii-container" parallaxData={AnimKawaii}>
        {children}
      </Plx>
    </Container>
  );
};

export default UseCases;
