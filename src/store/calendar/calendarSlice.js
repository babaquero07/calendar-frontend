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
  },
});

export const { onSetActiveEvent } = calendarSlice.actions;
