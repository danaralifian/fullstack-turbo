"use client";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import rootReducer from "./reducer";

// Create a logger middleware
const logger = createLogger({
  // Customize the logger options if needed
  collapsed: true, // Collapse log messages
  diff: true, // Show the difference between the previous and next state
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Add logger to the middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
