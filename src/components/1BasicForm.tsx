import {
  Debug,
  Form,
  Input,
  Relevant,
  RadioGroup,
  Radio,
  useFormApi,
  FormApi,
} from "informed";
import React, { Fragment } from "react";

/* const validate = (value: any) => {
  return !value || value.length < 5
    ? "Field must be longer than 5 characters"
    : undefined;
};

const validateForm = (values: any) => {
  return values.name === "Joseph" ? "Username is already taken" : undefined;
}; */

const BasicForm = () => {
  return (
    <Form>
      {({ formApi }: any) => (
        <Fragment>
          <Input name="name" label="First name: " />
          <RadioGroup name="married">
            Are you married ?
            <br />
            <label>
              Yes
              <Radio value="yes" />
            </label>
            <br />
            <label>
              No
              <Radio value="no" />
            </label>
          </RadioGroup>
          <Relevant
            when={({ formState }) => formState.values?.married === "yes"}
          >
            <Input name="spouse" label="spouse name: " />
          </Relevant>
          <button
            onClick={() => {
              formApi.setValue("name", "sfsdfsdsafsafds");
            }}
          >
            load sample name
          </button>
          <button
            onClick={() => {
              formApi.reset();
            }}
          >
            Reset
          </button>
          <button type="submit">Submit</button>
          <Debug />
        </Fragment>
      )}
    </Form>
  );
};

export default BasicForm;
