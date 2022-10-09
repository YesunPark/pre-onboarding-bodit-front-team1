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
              height={180}
              data={graphData}
              margin={{ top: 10, right: 20, bottom: 30, left: 60 }}
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
                tickValues: [],
              }}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 0,
                tickPadding: 6,
                tickRotation: 20,
                legendPosition: "middle",
                tickValues: filteredTicks,
              }}
              axisLeft={{
                orient: "left",
                tickSize: 6,
                tickPadding: 9,
                tickRotation: 0,
                legend: graphData[0].id,
                legendOffset: -52,
                legendPosition: "middle",
              }}
              enableGridX={false}
              pointSize={1}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor="#ff0000"
              pointLabelYOffset={-10}
              legends={[]}
              theme={{
                background: "white",
                axis: {
                  ticks: {
                    text: {
                      fontSize: "10px",
                    },
                  },
                  legend: {
                    text: {
                      fill: "#aaaaaa",
                    },
                  },
                },
              }}
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
    margin-bottom: 10px;

    .title {
      margin-bottom: 10px;
      font-size: 1.15rem;
      font-weight: 700;
    }
    .graph-container {
      width: 50vw;
      height: 190px;
      border: 1px solid black;
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
`;

export default GraphBox;
