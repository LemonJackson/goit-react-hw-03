import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, handleDeleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact
              contact={contact}
              handleDeleteContact={handleDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
}
