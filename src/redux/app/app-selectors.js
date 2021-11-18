import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.Contacts.loading;

const getFilter = (state) => state.Contacts.filter;

const getAllContacts = (state) => state.Contacts.items;

const getTotalContactCount = (state) => {
  const Contacts = getAllContacts(state);
  return Contacts.length;
};

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (Contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return Contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const ContactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactCount,
};
export default ContactsSelectors;
