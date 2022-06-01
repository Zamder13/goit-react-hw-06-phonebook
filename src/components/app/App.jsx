import Form from "../contactForm/ContactForm";
import ContactList from "../contactsList/ContactList";
import Filter from "../filter/Filter";
import { nanoid } from "nanoid";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  contactAdded,
  deleteContact,
  filterContact,
} from "../contactForm/contactFormSlice";

const App = () => {
  const contacts = useSelector((state) => {
    return state.contacts.items;
  });

  const filter = useSelector((state) => {
    console.log("state.contacts.filter", state.contacts.filter);
    return state.contacts.filter;
  });

  const dispatch = useDispatch();

  const removeContact = (contactId) => {
    return dispatch(deleteContact(contactId));
  };

  const setContact = (name, number) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      dispatch(contactAdded(contact));
    }
  };

  const changeFilter = (event) => {
    const filterdName = event.target.value;
    dispatch(filterContact(filterdName));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={setContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        persons={filteredContacts(contacts)}
        onDeleteContact={removeContact}
      />
    </>
  );
};

export default App;
