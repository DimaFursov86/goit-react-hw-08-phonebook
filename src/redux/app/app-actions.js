import { createAction } from "@reduxjs/toolkit";

// const changeFilter = createAction("phonebook/changeFilter");

// const phonebookActions = { changeFilter };
// export default phonebookActions;

export const fetchContactsRequest = createAction(
  "Contact/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "Contact/fetchContactsSuccess"
);
export const fetchContactsError = createAction("Contact/fetchContactsError");

export const addContactRequest = createAction("Contact/addContactRequest");
export const addContactuccess = createAction("Contact/addContactuccess");
export const addContactError = createAction("Contact/addContactError");

export const deleteContactRequest = createAction(
  "Contact/deleteContactRequest"
);
export const deleteContactuccess = createAction("Contact/deleteContactuccess");
export const deleteContactError = createAction("Contact/deleteContactError");

export const changeFilter = createAction("Contact/changeFilter");
