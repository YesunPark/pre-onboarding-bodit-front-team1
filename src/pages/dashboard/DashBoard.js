import styled from "styled-components";
import Fetch from "./Fetch";

const DashBoard = () => {
  return (
    <DashBoardContainer>
      <Fetch />
    </DashBoardContainer>
  );
};

const DashBoardContainer = styled.div``;

export default DashBoard;
