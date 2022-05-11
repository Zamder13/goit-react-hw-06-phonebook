import React, { useState, useEffect } from "react";
import Form from "../contactForm/ContactForm";
import ContactList from "../contactsList/ContactList";
import Filter from "../filter/Filter";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem("contacts")));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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

      setContacts((prevContacts) => [...prevContacts, contact]);
    }
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const getfilteredContacts = () => {
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
        persons={getfilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
};

export default App;
