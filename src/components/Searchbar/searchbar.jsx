import { Formik, Form } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  const handelSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <header className="searchbar">
      <Formik initialValues={{ search: '' }} onSubmit={handelSubmit}>
        <Form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
