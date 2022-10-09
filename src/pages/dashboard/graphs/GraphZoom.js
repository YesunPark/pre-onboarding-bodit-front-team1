import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import styled from "styled-components";

const GraphZoom = ({ graphWidth, setGraphWidth }) => {
  const zoomIn = () => {
    graphWidth <= 1850 && setGraphWidth(graphWidth + 100);
  };
  const zoomOut = () => {
    graphWidth >= 450 && setGraphWidth(graphWidth - 100);
  };
  return (
    <GraphZoomContainer>
      <button className="zoom-button" onClick={zoomIn}>
        그래프 확대 <AiFillPlusCircle className="icon" />
      </button>
      <button className="zoom-button" onClick={zoomOut}>
        그래프 축소 <AiFillMinusCircle className="icon" />
      </button>
      <div className="alert">드래그를 통해 그래프 순서를 바꿀 수 있습니다.</div>
    </GraphZoomContainer>
  );
};

const GraphZoomContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .zoom-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-bottom: 10px;
    background-color: white;
    font-size: 20px;
    font-family: "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic",
      sans-serif;
    cursor: pointer;

    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .icon {
      margin-left: 5px;
    }
  }

  .alert {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.95rem;
    font-weight: 700;
  }
`;

export default GraphZoom;
