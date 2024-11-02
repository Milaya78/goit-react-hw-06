import css from "./App.module.css";
// import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../../redux/contactsSlice";
import { setFilter } from "../../redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.filter);
  // const [contacts, setContacts] = useState(() => {
  //   const storagedContacts = localStorage.getItem("contacts");

  //   if (storagedContacts !== null) {
  //     return JSON.parse(storagedContacts);
  //   }

  //   return initialContacts;
  // });

  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  function onAddContact(newContact) {
    const action = addContact(newContact);
    dispatch(action);
    // setContacts((prevState) => {
    //   return [...prevState, newContact];
    // });
  }

  function onDeleteContact(contactId) {
    const action = deleteContact(contactId);
    dispatch(action);
    // setContacts((prevState) => {
    //   return prevState.filter((contact) => contact.id !== contactId);
    // });
  }

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={onAddContact} />
      <SearchBox
        value={filter}
        onFilter={(value) => {
          const action = setFilter(value);
          dispatch(action);
        }}
      />
      <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
    </div>
  );
}

export default App;
