import { createSlice } from "@reduxjs/toolkit";

//
import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", //other possible values can be CONTACT, STARRED MSGS, SHARED DOCS
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle Sidebar
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

//Reducer
export default slice.reducer;

//
export function ToggleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  }
}
export function UpdateSidebarType(type) {
  return async () => {
    dispatch(slice.actions.updateSidebarType({
      type
    }));
  }
}


