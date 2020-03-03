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
      style={{ width: '100%', margin: '20px 0' }}
    />
  );
};

const validationSchema = yup.object({
  bank: yup
    .string()
    .required()
    .min(2),
  bankAddress: yup
    .string()
    .required()
    .min(2),
});

const NewOrder = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>New order</h1>
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
            <MyTextField name="bank" label="Beneficiary's bank" />
            <MyTextField
              name="bankAddress"
              label="Beneficiary's bank address"
            />
            <MyTextField name="swift" label="SWIFT/BIC" />
            <MyTextField name="beneficiary" label="Beneficiary" />
            <MyTextField
              name="beneficiaryAddress"
              label="Beneficiary's address"
            />
            <MyTextField
              name="beneficiaryAccountUSD"
              label="Beneficiary's account USD"
            />
            <MyTextField name="bankCorrespondent" label="Bank correspondent" />
            <MyTextField
              name="bankCorrAddress"
              label="Bank correspondent address"
            />
            <MyTextField
              name="bankCorrAccount"
              label="Bank correspondent account"
            />
            <MyTextField
              name="bankCorrSwift"
              label="Bank correspondent SWIFT"
            />
            <MyTextField name="detailsPayment" label="Details payment" />
            <MyTextField name="amount" label="Amount" />
            <MyTextField name="specTerms" label="Special terms" />

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
