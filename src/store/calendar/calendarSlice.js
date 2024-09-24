import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

// Temporal event for testing purposes
const tempEvent = {
  title: "My event",
  notes: "Notes here",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Fernando",
  },
};

const initialState = {
  events: [tempEvent],
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
});

export const {} = calendarSlice.actions;
