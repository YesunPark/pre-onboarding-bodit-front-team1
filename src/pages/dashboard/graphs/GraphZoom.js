import { useState, useEffect } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import styled from "styled-components";

const GraphZoom = ({ graphWidth, setGraphWidth }) => {
  const zoomIn = () => {
    graphWidth <= 1500 && setGraphWidth(graphWidth + 100);
  };
  const zoomOut = () => {
    graphWidth >= 300 && setGraphWidth(graphWidth - 100);
  };
  return (
    <GraphZoomContainer>
      <button className="zoom-button" onClick={zoomIn}>
        그래프 확대 <AiFillPlusCircle className="icon" />
      </button>
      <button className="zoom-button" onClick={zoomOut}>
        그래프 축소 <AiFillMinusCircle className="icon" />
      </button>
    </GraphZoomContainer>
  );
};

const GraphZoomContainer = styled.div`
  position: absolute;
  right: calc(10vw / 6);
  top: calc(10vw / 6);

  .zoom-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-bottom: 10px;
    background-color: transparent;
    font-size: 20px;
    font-family: "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic",
      sans-serif;
    cursor: pointer;

    .icon {
      margin-left: 5px;
    }
  }
`;

export default GraphZoom;
