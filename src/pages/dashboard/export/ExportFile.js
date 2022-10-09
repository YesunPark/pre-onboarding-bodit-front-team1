import { CSVLink } from "react-csv";

const ExportFile = ({ data }) => {
  const headers = [
    { label: "Created", key: "created_at" },
    { label: "Temperature", key: "field1" },
    { label: "Humidity", key: "field2" },
    { label: "Pressure", key: "field3" },
  ];

  return (
    <CSVLink data={data.feeds} filename="data" headers={headers}>
      Download me
    </CSVLink>
  );
};

export default ExportFile;
