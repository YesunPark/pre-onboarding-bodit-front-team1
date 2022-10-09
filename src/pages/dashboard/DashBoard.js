import { useState, useEffect } from "react";
import axios from "axios";
import Graphs from "./graphs/Graphs";
import styled from "styled-components";
import DatePick from "./date/DatePick";
import ExportFile from "./export/ExportFile";

const DashBoard = () => {
  const [graphData, setGraphData] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const updatedStartDate = startDate.toISOString().split("T")[0];
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 1);
  const updatedEndDate = endDate.toISOString().split("T")[0];

  useEffect(() => {
    const getData = async () => {
      const list = await axios.get(
        `https://api.thingspeak.com/channels/1348864/feeds.json?api_key=6SKW0U97IPV2QQV9&start=${updatedStartDate}&end=${updatedEndDate}`
      );
      setGraphData(list.data);
    };
    getData();
  }, [startDate]);

  return (
    graphData && (
      <DashBoardContainer>
        <DatePick setStartDate={setStartDate} startDate={startDate} />
        <Graphs sensorData={graphData} />
        <ExportFile data={graphData} />
      </DashBoardContainer>
    )
  );
};

const DashBoardContainer = styled.div`
  position: relative;
`;

export default DashBoard;
