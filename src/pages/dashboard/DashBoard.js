import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Graphs from "./graphs/Graphs";

const DashBoard = () => {
  const [data, setData] = useState([]);

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
    <DashBoardContainer>
      <Graphs />
    </DashBoardContainer>
  );
};

const DashBoardContainer = styled.div``;

export default DashBoard;
