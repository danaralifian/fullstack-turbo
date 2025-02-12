import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import rootReducer from "./reducer";

// Create a logger middleware
const logger = createLogger({
  collapsed: true, // Collapse log messages
  diff: true, // Show the difference between the previous and next state
});

const isProduction = process.env.NODE_ENV === "production";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();
    if (!isProduction) {
      middleware.push(logger);
    }
    return middleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
