import { useState, useEffect } from "react";
import axios from "axios";
import Graphs from "./graphs/Graphs";
import styled from "styled-components";
import DatePick from "./date/DatePick";
import ExportFile from "./export/ExportFile";

const DashBoard = () => {
  const [data, setData] = useState();
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
      setData(list.data);
    };
    getData();
  }, [startDate]);

  return (
    data && (
      <DashBoardContainer>
        <DatePick setStartDate={setStartDate} startDate={startDate} />
        <Graphs sensorData={data} />
        <ExportFile data={data} />
      </DashBoardContainer>
    )
  );
};

const DashBoardContainer = styled.div`
  position: relative;
`;

export default DashBoard;
