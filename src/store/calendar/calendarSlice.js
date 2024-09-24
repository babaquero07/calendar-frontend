import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

// Temporal event for testing purposes
const tempEvent = {
  _id: new Date().getTime(),
  title: "My event",
  notes: "Notes here",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Alexander Baquero",
  },
};

const initialState = {
  events: [tempEvent],
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
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
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateActiveEvent,
  onDeleteEvent,
} = calendarSlice.actions;
