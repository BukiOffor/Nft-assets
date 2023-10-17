import { setProject } from "@/reducers/userSlice";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Project = {
  projectItem: any;
};

const initialState: Project = {
  projectItem: {},
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectItem: (state, action) => {
      state.projectItem = action.payload;
    },
  },
});

export const getProjectItem = (state: RootState) => state.project.projectItem;
export const { setProjectItem } = projectSlice.actions;
export default projectSlice.reducer;
