import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactFormSlice.jsx";

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
