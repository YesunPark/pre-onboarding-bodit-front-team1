import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";

const GraphBox = ({ graphWidth, graphData, filteredTicks, feedsData }) => {
  return (
    <GraphBoxContainer>
      <div className="graph-wrapper flex-center">
        <h2 className="title">{graphData[0].title}</h2>
        <div className="graph-container flex-center">
          {feedsData.length === 0 ? (
            <div className="empty-box">
              해당 날짜의 데이터가 존재하지 않습니다.
            </div>
          ) : (
            <ResponsiveLine
              width={graphWidth}
              height={300}
              data={graphData}
              margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
              lineWidth={1}
              colors={graphData[0].color}
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
          )}
        </div>
      </div>
    </GraphBoxContainer>
  );
};

const GraphBoxContainer = styled.div`
  .graph-wrapper {
    flex-direction: column;

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
