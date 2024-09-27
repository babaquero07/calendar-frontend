import { useSelector, useDispatch } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateActiveEvent,
  onLoadEvents,
} from "../store";

import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";

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

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");

      const events = convertEventsToDateEvents(data.events);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.error(error);
    }
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
    startLoadingEvents,
  };
};
