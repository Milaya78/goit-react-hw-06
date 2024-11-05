import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

function ContactList() {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
