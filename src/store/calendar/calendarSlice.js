import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  activeEvent: null,
  isLoading: true,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoading = false;
      // Add only new events to the state
      payload.forEach((event) => {
        const exists = state.events.some(
          (dbEvent) => dbEvent._id === event._id
        );
        if (!exists) {
          state.events.push(event);
        }
      });
    },
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);

      state.activeEvent = null;
    },
    onUpdateActiveEvent: (state, { payload }) => {
      state.events = state.events.map((event) =>
        event._id === payload._id ? payload : event
      );
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );

        state.activeEvent = null;
      }
    },
    onLogoutCalendar: (state) => {
      state.events = [];
      state.activeEvent = null;
      state.isLoading = true;
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateActiveEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
} = calendarSlice.actions;
