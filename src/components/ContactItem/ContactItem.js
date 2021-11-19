import s from "./ContactItem.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import ContactsOperations from "../../redux/app/app-operations";

import ContactsSelectors from "../../redux/app/app-selectors";

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={s.contactItem}>
      <p className={s.contactItemText}>{name}</p>
      <p className={s.contactItemText}>{number}</p>
      <button
        type="button"
        disabled={ContactsSelectors.loading}
        className={s.contactItemTextB}
        onClick={() => dispatch(ContactsOperations.deleteContact(id))}
      >
        {ContactsSelectors.loading ? <Loader /> : "Delete"}
      </button>
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
