import { useState } from "react";
import GraphZoom from "./GraphZoom";
import GraphBox from "./GraphBox";
import styled from "styled-components";

const Graphs = ({ sensorData }) => {
  const [graphWidth, setGraphWidth] = useState(500);
  const filteredDatas = sensorData.feeds.filter((feedsData, i) => i % 6 === 0);
  const filteredTicks = filteredDatas.map((filteredData) =>
    String(filteredData.created_at).slice(11, 16)
  );

  const graphsData = [
    {
      title: "기온",
      id: "Temp",
      data: sensorData.feeds.map((feedsData, i) => {
        return {
          x: String(feedsData.created_at).slice(11, 16),
          y: Number(feedsData.field1),
        };
      }),
    },
    {
      title: "습도",
      id: "Humidity",
      data: sensorData.feeds.map((feedsData, i) => {
        return {
          x: String(feedsData.created_at).slice(11, 16),
          y: Number(feedsData.field2),
        };
      }),
    },
    {
      title: "기압",
      id: "Pressure",
      data: sensorData.feeds.map((feedsData) => {
        return {
          x: String(feedsData.created_at).slice(11, 16),
          y: Number(feedsData.field3),
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
            key={graphData.id}
          />
        ))}
      </div>
    </GraphsContainer>
  );
};

const GraphsContainer = styled.div`
  padding-top: 100px;
  .graphs-container {
    display: flex;
  }
`;

export default Graphs;
