import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./actions.js";

const toAddContact = (state, action) => {
  const doubleName = state.find(
    (el) => el.name === action.payload.contact.name
  );
  if (doubleName) {
    alert(`${action.payload.contact.name} has already been added`);
    return;
  }
  return [...state, action.payload.contact];
};

const toDeleteContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [contactsActions.postContacts]: (state, action) =>
    localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : state,
  [contactsActions.addContacts]: toAddContact,
  [contactsActions.handleDelete]: toDeleteContact,
});

const filter = createReducer("", {
  [contactsActions.handleFilter]: (state, action) => action.payload.filter,
});

export default combineReducers({ items, filter });
