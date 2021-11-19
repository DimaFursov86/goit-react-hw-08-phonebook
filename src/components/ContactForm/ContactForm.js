import { useState } from "react";
import s from "./ContactForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ContactsOperations from "../../redux/app/app-operations";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import ContactsSelectors from "../../redux/app/app-selectors";
// import { getAllContacts } from '../../redux/app/app-selectors';

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  // const contacts = useSelector(getAllContacts);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const getVcontacts = useSelector(ContactsSelectors.getVisibleContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existName = getVcontacts.map((obj) => obj.name);
    if (existName.includes(name)) {
      toast.error(`${name} is already in contacts`);
    } else {
      dispatch(ContactsOperations.addContact({ name, number }));
      toast.success(`${name} was added`);
    }
    // const value = name;
    // if (contacts) {
    //   const getVcontacts = contacts.filter(({ name }) =>
    //     name.toLowerCase().includes(value.toLowerCase())
    //   );
    //   const existName = getVcontacts.map((obj) => obj.name);
    //   if (existName.includes(value)) {
    //     toast.error(`${value} is already in contacts`);
    //   } else {
    //     createContact(e.currentTarget.elements.name.value);
    //     toast.success(`${value} was added`);
    //   }
    // }

    setName("");
    setNumber("");
  };

  return (
    <form className={s.formContact} onSubmit={handleSubmit}>
      <label className={s.contactFormItem}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <br />
      <label className={s.contactFormItem}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <Toaster />
      <button
        className={s.formButton}
        type="submit"
        disabled={ContactsSelectors.loading}
      >
        {ContactsSelectors.loading ? <Loader /> : "Add contact"}
      </button>
    </form>
  );
}
