import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import { MdPerson, MdPersonRemove, MdPhone } from "react-icons/md";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  function onDeleteContact(contactId) {
    const action = deleteContact(contactId);
    dispatch(action);
  }

  return (
    <li className={css.contact}>
      <div className={css.contactDetails}>
        <p className={css.contactText}>
          <MdPerson className={css.icon} /> {name}
        </p>
        <p className={css.contactText}>
          <MdPhone className={css.icon} /> {number}
        </p>
      </div>
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
        className={css.deleteButton}
      >
        <MdPersonRemove className={css.icon} />
      </button>
    </li>
  );
}

export default Contact;
