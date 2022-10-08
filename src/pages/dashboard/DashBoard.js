import { useState, useEffect } from "react";
import axios from "axios";
import Graphs from "./Graphs/Graphs";
import GraphZoom from "./Graphs/GraphZoom";
import styled from "styled-components";

const DashBoard = () => {
  const [data, setData] = useState();

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
        <Graphs sensorData={data} />
      </DashBoardContainer>
    )
  );
};

const DashBoardContainer = styled.div`
  position: relative;
`;

export default DashBoard;
