import { IoPersonSharp } from 'react-icons/io5';
import { FaSquarePhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export default function Contact({ contact, handleDeleteContact }) {
  return (
    <>
      <p className={css.field}>
        <IoPersonSharp />
        {contact.name}
      </p>
      <p className={css.field}>
        <FaSquarePhone />
        {contact.number}
      </p>
      <button
        className={css.btn}
        type="button"
        name="delete"
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
}
