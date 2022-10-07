import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const Graphs = () => {
  return (
    <GraphsContainer>
      <div className="graphs-container">
        <GraphBox />
        <GraphBox />
        <GraphBox />
      </div>
    </GraphsContainer>
  );
};

const GraphBox = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: [1, 2, 4, 4, 5, 18, 4],
      },
    ],
  };

  const options = {
    // 옵션 (1)
    responsive: true,
    // 옵션 (2)
    interaction: {
      mode: "index",
      intersect: false,
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
      <div className="graph">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const GraphsContainer = styled.div`
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
      .graph {
        width: 30vw;
        margin: 0 calc(10vw / 6);
        border: 1px solid black;
      }
    }
  }
`;

export default Graphs;
