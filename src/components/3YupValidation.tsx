import { Form, Input } from "informed";
import React from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const lastNameSchema = Yup.string()
  .min(2, "ln Too Short!")
  .max(50, "ln Too Long!")
  .required("ln Required");

const YupValidation = () => {
  return (
    <div>
      <Form
        yupSchema={SignupSchema}
        onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}
      >
        <Input name="firstName" label="First Name:" />
        <br />
        <Input
          name="lastName"
          label="Last Name:"
          //   validationSchema={lastNameSchema}
        />
        <br />
        <Input name="email" label="Email:" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default YupValidation;
