import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleAddContact = newContact => {
    setContacts(() => {
      return [...contacts, newContact];
    });
  };

  const handleDeleteContact = id => {
    setContacts(() => {
      return contacts.filter(contact => contact.id !== id);
    });
  };

  return (
    <section className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} handleAddContact={handleAddContact} />
      <SearchBox value={filterValue} onChange={setFilterValue} />
      <ContactList
        contacts={handleFilterContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </section>
  );
}
