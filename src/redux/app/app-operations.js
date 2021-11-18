import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./app-actions";

// GET @ /contacts
const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// POST @ /contacts
const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const Contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    axios
      .post("/contacts", Contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error.message)));
  };

// DELETE @ /contacts/:id
const deleteContact = (ContactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${ContactId}`)
    .then(() => dispatch(deleteContactSuccess(ContactId)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};

// PATCH @ /contacts/:id
// const toggleCompleted = ({ id, completed }) => dispatch => {
//   const update = { completed };

//   dispatch(toggleCompletedRequest());

//   axios
//     .patch(`/contacts/${id}`, update)
//     .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//     .catch(error => dispatch(toggleCompletedError(error.message)));
// };

const ContactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default ContactsOperations;
