import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import GraphZoom from "./GraphZoom";
import styled from "styled-components";

const Graphs = ({ sensorData }) => {
  const [graphWidth, setGraphWidth] = useState(900);
  const sensorFeeds = sensorData.feeds;
  const datas = [
    {
      labels: sensorFeeds.map((data) => String(data.created_at).slice(11, 16)),
      datasets: [
        {
          type: "line",
          label: "AT-C",
          borderColor: "red",
          borderWidth: 1,
          pointRadius: 1,
          data: sensorFeeds.map((data) => data.field1),
        },
      ],
    },
    {
      labels: sensorFeeds.map((data) => String(data.created_at).slice(11, 16)),
      datasets: [
        {
          type: "line",
          label: "AT-C",
          borderColor: "red",
          borderWidth: 1,
          pointRadius: 1,
          data: sensorFeeds.map((data) => data.field2),
        },
      ],
    },
    {
      labels: sensorFeeds.map((data) => String(data.created_at).slice(11, 16)),
      datasets: [
        {
          type: "line",
          label: "AT-C",
          borderColor: "red",
          borderWidth: 1,
          pointRadius: 1,
          data: sensorFeeds.map((data) => data.field3),
        },
      ],
    },
  ];
  return (
    <GraphsContainer>
      <div className="graphs-container">
        <GraphZoom graphWidth={graphWidth} setGraphWidth={setGraphWidth} />
        {datas.map((graphData) => (
          <GraphBox
            graphData={graphData}
            graphWidth={graphWidth}
            setGraphWidth={setGraphWidth}
          />
        ))}
      </div>
    </GraphsContainer>
  );
};

const GraphBox = ({ graphData, graphWidth, setGraphWidth }) => {
  const GRAPH_OPTIONS = {
    // 옵션 (1)
    responsive: true,
    // 옵션 (2)
    interaction: {
      mode: "index",
      intersect: true,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    // 옵션 (3)
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#E3E3E3",
        },
      },
    },
  };

  return (
    <div className="graph-wrapper">
      <h2 className="title">제목</h2>
      <div className="graph-container">
        <div className="graph-cover">
          {graphData && (
            <Line
              data={graphData}
              options={GRAPH_OPTIONS}
              // width="100%"
              // onResize={() => {}}
              resizeDelay="1000"
              height="300"
            />
          )}
        </div>
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
        margin: 0 calc(10vw / 6);
        border: 1px solid black;
        overflow: hidden;

        .graph-cover {
          width: 400px;
          height: ;
        }
      }
    }
  }
`;

export default Graphs;
