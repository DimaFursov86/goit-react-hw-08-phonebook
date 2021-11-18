import s from "./ContactItem.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import * as appOperations from "../../redux/app/app-operations";
import { deleteContactRequest } from "../../redux/app/app-actions";
export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={s.contactItem}>
      <p className={s.contactItemText}>{name}</p>
      <p className={s.contactItemText}>{number}</p>
      <button
        type="button"
        disabled={deleteContactRequest}
        className={s.contactItemTextB}
        onClick={() => dispatch(appOperations.deleteContact(id))}
      >
        {deleteContactRequest ? <Loader /> : "Delete"}
      </button>
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
