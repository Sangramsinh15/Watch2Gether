import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../../context/GlobalContext";

/**
 * Function to select days
 * @param {*} param0 The parameters include the day and rwo index for the day
 * @returns The day selected and the event selected in the specified format
 */

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "" : " ";
  }
  return (
    // UI for calander view, i.e., the calander grid and day and date labels
    <div className="border-solid border-red-100 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-white p-1 text-black text-md rounded m-0.5 mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
