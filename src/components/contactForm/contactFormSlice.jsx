import { createSlice } from "@reduxjs/toolkit";

const contacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const initialState = { items: contacts, filter: "" };

export const contactFormSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactAdded: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      const { id } = action.payload;
      const delContact = state.items.find((item) => item.id === id);
      state.items.splice([delContact], 1);
    },

    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { contactAdded, deleteContact, filterContact } =
  contactFormSlice.actions;

export default contactFormSlice.reducer;
