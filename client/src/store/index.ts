import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import projectReducer from "../reducers/project_slice";

const store = configureStore({
  reducer: {
    users: userReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
