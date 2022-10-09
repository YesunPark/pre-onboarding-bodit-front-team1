import { CSVLink } from "react-csv";
import styled from "styled-components";

const ExportFile = ({ data }) => {
  const headers = [
    { label: "Created", key: "created_at" },
    { label: "Temperature", key: "field1" },
    { label: "Humidity", key: "field2" },
    { label: "Pressure", key: "field3" },
  ];

  return (
    <ExportButtonContainer>
      <CSVLink data={data.feeds} filename="data" headers={headers}>
        Export
      </CSVLink>
    </ExportButtonContainer>
  );
};

const ExportButtonContainer = styled.div`
  margin: 5% 2.5% 0 2.5%;
  text-align: right;

  a {
    color: white;
    display: inline-block;
    text-decoration: none;
    background-color: green;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default ExportFile;
