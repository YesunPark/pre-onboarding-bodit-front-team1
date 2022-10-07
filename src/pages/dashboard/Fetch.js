import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
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

  return <div>Fetch</div>;
};

export default Fetch;
