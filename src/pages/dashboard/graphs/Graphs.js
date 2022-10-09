import { useState } from "react";
import GraphZoom from "./GraphZoom";
import GraphBox from "./GraphBox";
import styled from "styled-components";

const Graphs = ({ sensorData }) => {
  const [graphWidth, setGraphWidth] = useState(500);
  const feedsData = sensorData.feeds;
  const filteredDatas = sensorData.feeds.filter((feedsData, i) => i % 6 === 0);
  const filteredTicks = filteredDatas.map((filteredData) =>
    String(filteredData.created_at).slice(11, 16)
  );

  const graphsData = [
    {
      title: "기온",
      id: "Temp",
      color: "red",
      data: feedsData.map((feedData, i) => {
        return {
          x: String(feedData.created_at).slice(11, 16),
          y: Number(feedData.field1),
        };
      }),
    },
    {
      title: "습도",
      id: "Humidity",
      color: "red",
      data: feedsData.map((feedData, i) => {
        return {
          x: String(feedData.created_at).slice(11, 16),
          y: Number(feedData.field2),
        };
      }),
    },
    {
      title: "기압",
      id: "Pressure",
      color: "red",
      data: feedsData.map((feedData) => {
        return {
          x: String(feedData.created_at).slice(11, 16),
          y: Number(feedData.field3),
        };
      }),
    },
  ];

  return (
    <GraphsContainer>
      <div className="graphs-container">
        <GraphZoom graphWidth={graphWidth} setGraphWidth={setGraphWidth} />
        {graphsData.map((graphData) => (
          <GraphBox
            graphWidth={graphWidth}
            graphData={[graphData]}
            filteredTicks={filteredTicks}
            feedsData={feedsData}
            key={graphData.id}
          />
        ))}
      </div>
    </GraphsContainer>
  );
};

const GraphsContainer = styled.div`
  padding-top: 100px;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .graphs-container {
    display: flex;
  }
`;

export default Graphs;
