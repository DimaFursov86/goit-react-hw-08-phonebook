import s from "./ContactList.module.scss";
import ContactItem from "../ContactItem";
import { useSelector } from "react-redux";
import ContactsSelectors from "../../redux/app/app-selectors";
import { fetchContactsSuccess } from "../../redux/app/app-actions";
export default function ContactList() {
  const getVcontacts = useSelector(ContactsSelectors.getVisibleContacts);

  return (
    <ul className={s.contactList}>
      {fetchContactsSuccess &&
        getVcontacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
    </ul>
  );
}
