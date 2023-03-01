import { configureStore } from "@reduxjs/toolkit";
import data from "../slice/data";

export default configureStore({
  reducer: { data },
  devTools: process.env.NODE_ENV !== "production",
});
