import styled from "styled-components";
import DatePicker from "react-datepicker";
import calendar from "../../../assets/images/calendar.png";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePickContainer>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
          withPortal
        />
      </DatePickContainer>
    </>
  );
};
const DatePickContainer = styled.div`
  .react-datepicker__input-container {
    position: relative;
    width: auto;
    //날짜 인풋
    input {
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
      right: 90px;
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
    //컨테이너
  }
  .react-datepicker__header {
    background: #fff !important;
    border: none !important;
    //달력 일 월부분
  }
  .react-datepicker__current-month {
    font-weight: 500;
  }
  .react-datepicker__navigation {
    //월변경
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
    //달
    padding: 30px 0 !important;
  }
  .react-datepicker__day-names {
    //일 전체
    margin-bottom: 2px;
  }
  .react-datepicker__day-name {
    //일 하나하나
    width: 1.9rem;
    font-weight: 500;
    line-height: 1.9rem;
    color: #666;
  }
  .react-datepicker__month {
    //1-31날짜부분
  }
  .react-datepicker__week {
    //1-31 한줄 단위
  }
  .react-datepicker__day {
    //하루한칸
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
