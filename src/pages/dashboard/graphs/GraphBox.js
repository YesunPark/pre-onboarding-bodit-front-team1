import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";

const GraphBox = ({ graphWidth, graphData, filteredTicks }) => {
  return (
    <GraphBoxContainer>
      <div className="graph-wrapper">
        <h2 className="title">{graphData[0].title}</h2>
        <div className="graph-container">
          <ResponsiveLine
            width={graphWidth}
            height={300}
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
    </GraphBoxContainer>
  );
};

const GraphBoxContainer = styled.div`
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
`;

export default GraphBox;
