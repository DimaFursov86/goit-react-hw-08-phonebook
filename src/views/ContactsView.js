import Section from "../components/Section/";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import s from "./ContactsView.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactsOperations from "../redux/app/app-operations";
export default function Phonebook() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(ContactsOperations.fetchContacts()), [dispatch]);

  return (
    <Section>
      <div className={s.box}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Section>
  );
}
