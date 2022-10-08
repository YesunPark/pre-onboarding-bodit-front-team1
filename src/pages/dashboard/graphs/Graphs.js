import { useState } from "react";
import GraphZoom from "./GraphZoom";
import { ResponsiveLine } from "@nivo/line";
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
      color: "hsl(242, 70%, 50%)",
      data: sensorData.feeds.map((feedsData, i) => {
        return {
          x: String(feedsData.created_at).slice(11, 16),
          y: Number(feedsData.field2),
        };
      }),
    },
    {
      title: "습도",
      id: "Humidity",
      color: "hsl(242, 70%, 50%)",
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
      color: "hsl(242, 70%, 50%)",
      data: sensorData.feeds.map((feedsData) => {
        return {
          x: String(feedsData.created_at).slice(11, 16),
          y: feedsData.field3,
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
          />
        ))}
      </div>
    </GraphsContainer>
  );
};

const GraphBox = ({ graphWidth, graphData, filteredTicks }) => {
  const commonProperties = {
    width: graphWidth,
    height: 300,
  };
  return (
    <div className="graph-wrapper">
      <h2 className="title">{graphData[0].title}</h2>
      <div className="graph-container">
        <ResponsiveLine
          {...commonProperties}
          data={graphData}
          margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={{
            orient: "top",
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 0,
            legend: "AT-C",
            legendPosition: "middle",
            legendOffset: -25,
            tickValues: [],
          }}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 0,
            tickPadding: 4,
            tickRotation: 70,
            legend: "Date",
            legendOffset: 40,
            legendPosition: "middle",
            tickValues: filteredTicks,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 6,
            tickPadding: 9,
            tickRotation: -33,
            legend: graphData[0].id,
            legendOffset: -50,
            legendPosition: "middle",
          }}
          enableGridX={false}
          pointSize={1}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor="#ff0000"
          pointLabelYOffset={-10}
          useMesh={true}
          legends={[]}
          animate={false}
        />
      </div>
    </div>
  );
};

const GraphsContainer = styled.div`
  padding-top: 100px;
  .graphs-container {
    display: flex;
    .graph-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title {
        margin-bottom: 30px;
        font-size: 1.5rem;
        font-weight: 700;
      }
      .graph-container {
        width: 30vw;
        height: 330px;
        margin: 0 calc(10vw / 6);
        border: 1px solid black;
        overflow-x: scroll;
        overflow-y: hidden;
      }
    }
  }
`;

export default Graphs;
