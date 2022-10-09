import styled from "styled-components";
import DatePicker from "react-datepicker";
import calendar from "../../../assets/images/calendar.png";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({ startDate, setStartDate }) => {
  return (
    <>
      <DatePickContainer>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
          withPortal
          maxDate={new Date()}
        />
      </DatePickContainer>
    </>
  );
};
const DatePickContainer = styled.div`
  .react-datepicker__input-container {
    position: relative;
    width: auto;
    input {
      width: 150px;
      padding: 7px 10px;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      cursor: pointer;
    }
    ::after {
      content: "";
      display: block;
      position: absolute;
      right: 10px;
      top: 50%;
      width: 20px;
      height: 20px;
      background: url(${calendar}) no-repeat;
      background-size: cover;
      transform: translateY(-50%);
      z-index: 1;
      cursor: pointer;
    }
  }

  .react-datepicker {
    padding: 0 10px 40px !important;
    border: none;
    border-radius: 10px !important;
    overflow: hidden;
  }
  .react-datepicker__header {
    background: #fff !important;
    border: none !important;
  }
  .react-datepicker__current-month {
    font-weight: 500;
  }
  .react-datepicker__navigation {
    top: 30px !important;
    width: 20px !important;
    height: 20px !important;
    transform: translateY(50%) !important;
  }
  .react-datepicker__navigation--previous {
    left: 15px !important;
  }
  .react-datepicker__navigation--next {
    right: 15px !important;
  }
  .react-datepicker__current-month {
    padding: 30px 0 !important;
  }
  .react-datepicker__day-names {
    margin-bottom: 2px;
  }
  .react-datepicker__day-name {
    width: 1.9rem;
    font-weight: 500;
    line-height: 1.9rem;
    color: #666;
  }
  .react-datepicker__day {
    width: 1.9rem;
    line-height: 1.9rem;
    :hover {
      border-radius: 50%;
      background: #eee;
    }
  }
  .react-datepicker__day--selected {
    border-radius: 50%;
    background: #bbb;
    :hover {
      background: #aaa;
    }
  }
  .react-datepicker__day--keyboard-selected {
    background: transparent;
    color: #000;
  }
  .react-datepicker__day--keyboard-selected {
  }
`;
export default DatePick;
