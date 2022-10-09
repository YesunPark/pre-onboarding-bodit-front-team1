import { useState, useEffect } from "react";
import axios from "axios";
import Graphs from "./graphs/Graphs";
import styled from "styled-components";
import DatePick from "./date/DatePick";

const DashBoard = () => {
  const [data, setData] = useState();

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const newDate =
      startDate.getFullYear() +
      "-" +
      (startDate.getMonth() + 1) +
      "-" +
      startDate.getDate();
  }, [startDate]);

  useEffect(() => {
    const getData = async () => {
      const list = await axios.get(
        "https://api.thingspeak.com/channels/1348864/feeds.json?api_key=6SKW0U97IPV2QQV9"
      );
      setData(list.data);
    };
    getData();
  }, []);

  console.log(data);

  return (
    data && (
      <DashBoardContainer>
        <DatePick setStartDate={setStartDate} startDate={startDate} />
        <Graphs sensorData={data} />
      </DashBoardContainer>
    )
  );
};

const DashBoardContainer = styled.div`
  position: relative;
`;

export default DashBoard;
