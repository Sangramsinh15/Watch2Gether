import React, { useState, useContext, useEffect } from "react";
import "../../App.css";
import { getMonth } from "../../util";
import CalendarHeader from "./CalendarParts/CalendarHeader";
import Sidebar from "./CalendarParts/Sidebar";
import Month from "./CalendarParts/Month";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "./CalendarParts/EventModal";
import "../../components/Calendar/calendar.css";
/**
 * The calendar component function to call all 
 * the functions in calendar parts at one place.
 * @param {*} props 
 * @returns 
 */
function CalendarComp(props) {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const { state } = props.location;

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal data={state} />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}
/**
 * The component is being exported as CalendarComp 
 * so that this component can be imported into other modules.
 */
export default CalendarComp;
