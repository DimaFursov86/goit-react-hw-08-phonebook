import { createSelector } from "@reduxjs/toolkit";
const getLoadingAdd = (state) => state.contacts.loadingAdd;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.contacts;

const getTotalContactCount = (state) => {
  const Contacts = getAllContacts(state);
  return Contacts.length;
};

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const ContactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactCount,
  getLoadingAdd,
};
export default ContactsSelectors;
