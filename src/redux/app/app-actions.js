import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "Contact/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "Contact/fetchContactsSuccess"
);
export const fetchContactsError = createAction("Contact/fetchContactsError");

export const addContactRequest = createAction("Contact/addContactRequest");
export const addContactSuccess = createAction("Contact/addContactuccess");
export const addContactError = createAction("Contact/addContactError");

export const deleteContactRequest = createAction(
  "Contact/deleteContactRequest"
);
export const deleteContactSuccess = createAction("Contact/deleteContactuccess");
export const deleteContactError = createAction("Contact/deleteContactError");

export const changeFilter = createAction("Contact/changeFilter");
