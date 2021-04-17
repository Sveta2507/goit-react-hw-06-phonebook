import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const addContacts = createAction("contact/add", (name, number) => {
  return {
    payload: {
      contact: {
        name,
        id: uuid(),
        number,
      },
    },
  };
});

const handleDelete = createAction("contact/del");

const handleFilter = createAction("contact/filter", (filter) => ({
  payload: { filter },
}));

const postContacts = createAction("contacts/post");

export default {
  addContacts,
  handleDelete,
  handleFilter,
  postContacts,
};
