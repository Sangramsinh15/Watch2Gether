import React from "react";
/**
 * The constant variable for global access of the events
 */
const GlobalContext = React.createContext({
  monthIndex: 0,
  indexMonthSet: (index) => { },
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => { },
  daySelected: null,
  setDaySelected: (day) => { },
  showEventModal: false,
  setShowEventModal: () => { },
  dispatchCalEvent: ({ type, payload }) => { },
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => { },
  setLabels: () => { },
  labels: [],
  updateLabel: () => { },
  filteredEvents: [],
});
/**
 * The context is being exported as GlobalContext 
 * so that this context can be imported into other modules.
 */
export default GlobalContext;
