import { combineReducers } from "@reduxjs/toolkit";
import slice from "./redux/slice";

const reducer = combineReducers({
  redux: slice.reducer,
});

export default reducer;
