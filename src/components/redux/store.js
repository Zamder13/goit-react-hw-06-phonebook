import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../contactForm/contactFormSlice.jsx";

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
