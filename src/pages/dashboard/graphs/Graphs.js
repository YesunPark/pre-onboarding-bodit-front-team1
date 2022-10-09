import { useState, useEffect } from "react";
import GraphZoom from "./GraphZoom";
import GraphBox from "./GraphBox";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Graphs = ({ sensorData }) => {
  const [graphWidth, setGraphWidth] = useState(750);
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

  const [copiedGraphsData, setCopiedGraphsData] = useState(graphsData);

  useEffect(() => {
    setCopiedGraphsData([...graphsData]);
  }, [sensorData]);

  const onDragEnd = (result) => {
    const items = Array.from(copiedGraphsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCopiedGraphsData(items);
  };

  return (
    <GraphsContainer>
      <GraphZoom graphWidth={graphWidth} setGraphWidth={setGraphWidth} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="graphs">
          {(provided) => (
            <ul
              className="graphs-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {copiedGraphsData.map((graphData, index) => (
                <Draggable
                  key={graphData.title}
                  draggableId={graphData.id}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className="graph-box-list"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <GraphBox
                        graphWidth={graphWidth}
                        graphData={[graphData]}
                        filteredTicks={filteredTicks}
                        feedsData={feedsData}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </GraphsContainer>
  );
};

const GraphsContainer = styled.div`
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .graphs-container {
    position: absolute;
    top: 110px;
    left: 25vw;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export default Graphs;
