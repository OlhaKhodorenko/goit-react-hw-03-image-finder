import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  search: yup.string().required(),
});

const initialValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handelSubmit = (values, { resetForm }) => {
    onSubmit(values);
    console.log(values);
    resetForm();
  };

  return (
    <header className="searchbar">
      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmit}
        validationSchema={schema}
      >
        <Form className="form" autoComplete="off">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <Field
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
          <ErrorMessage name="search" />
        </Form>
      </Formik>
    </header>
  );
};
