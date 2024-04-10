import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, <span className={css.error}>Too Short!</span>)
    .max(50, <span className={css.error}>Too Long!</span>)
    .required(<span className={css.error}>Required</span>),
  number: Yup.number().required(<span className={css.error}>Required</span>),
});

const initialValues = { name: '', number: '' };

export default function ContactForm({ handleAddContact }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    handleAddContact({
      id: nanoid(9),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameId}
            placeholder="Antony Robins"
          />

          <ErrorMessage name="name" as="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={numberId}>Number</label>
          <Field
            type="number"
            name="number"
            id={numberId}
            placeholder="1234567"
          />

          <ErrorMessage name="number" as="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
