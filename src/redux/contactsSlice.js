import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [
      {
        text: "Hellou",
        telNumber: "2345678",
        id: "0",
      },
    ],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(nameAndTel) {
        return {
          payload: {
            text: nameAndTel.text,
            telNumber: nameAndTel.telNumber,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const selectorContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
