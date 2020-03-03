import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...field}
      label={label}
      helperText={errorText}
      error={!!errorText}
      style={{ width: '100%' }}
    />
  );
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .min(2),
});

const NewOrder = () => {
  return (
    <div className="container">
      <h1>New order</h1>
      <Formik
        initialValues={{ firstName: 'bob' }}
        validationSchema={validationSchema}
        // validate={values => {
        //   const errors = {};
        //   if (values.firstName.trim().length === 0) {
        //     errors.firstName = 'need to fill up first name field';
        //   }
        //   return errors;
        // }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('Submitted data: ', data);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyTextField name="firstName" label="first name" />

            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              style={{ marginTop: '50px' }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewOrder;
