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
      <div className="zoom-wrapper" onClick={zoomIn}>
        그래프 확대 <AiFillPlusCircle className="icon" />
      </div>
      <div className="zoom-wrapper" onClick={zoomOut}>
        그래프 축소 <AiFillMinusCircle className="icon" />
      </div>
    </GraphZoomContainer>
  );
};

const GraphZoomContainer = styled.div`
  position: absolute;
  right: calc(10vw / 6);
  top: calc(10vw / 6);

  .zoom-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 20px;
    cursor: pointer;

    .icon {
      margin-left: 5px;
    }
  }
`;

export default GraphZoom;
