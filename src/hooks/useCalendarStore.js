import { useSelector, useDispatch } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateActiveEvent,
} from "../store";

import calendarApi from "../api/calendarApi";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: Connect to backend

    if (calendarEvent._id) {
      // Update
      dispatch(onUpdateActiveEvent({ ...calendarEvent }));
    } else {
      // Create
      const { data } = await calendarApi.post("/events", calendarEvent);

      dispatch(onAddNewEvent({ ...data.event, user }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    //* Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
