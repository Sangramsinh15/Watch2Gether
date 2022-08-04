import React, { useState, useEffect, useReducer, useMemo } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import axios from "axios";
/**
 * The function to create a wrapper to render the
 * saved events an to wrap all the events.
 * @param {*} state The parameter state defines 
 * the state of the event such as open or closed 
 * @param {*} param1 
 * @returns The function returns the state or an error if any
 */
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

// get data from localStorage
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  return storageEvents ? JSON.parse(storageEvents) : [];
}
/**
 * The function creates the wrapper for contexts that contain 
 * all the event detail and the events data.
 * @param {*} props 
 * @returns The map of saved events and the events data
 */
export default function ContextWrapper(props) {
  const [monthIndex, indexMonthSet] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  // Store data in localStorage
  useEffect(() => {
    const fetchURL = "http://localhost:8000/addEvent";
    axios.post(fetchURL, { ...savedEvents }).then((res) => console.log(res));
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      indexMonthSet(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        indexMonthSet,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
