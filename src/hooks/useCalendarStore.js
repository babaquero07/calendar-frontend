import { useSelector, useDispatch } from "react-redux";
import { onAddNewEvent, onSetActiveEvent, onUpdateActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    console.log("🚀 ~ startSavingEvent ~ calendarEvent:", calendarEvent);
    // TODO: Connect to backend

    if (calendarEvent._id) {
      // Update
      dispatch(onUpdateActiveEvent(calendarEvent));
    } else {
      // Create
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  return {
    //* Properties
    events,
    activeEvent,

    //* Methods
    setActiveEvent,
    startSavingEvent,
  };
};
