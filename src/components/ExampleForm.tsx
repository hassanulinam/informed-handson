import { Form, Input, Select, Checkbox, Relevant, Debug } from "informed";

const onSubmit = ({ values }: any) => console.log(values);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input name="name2" label="Name" placeholder="Elon" />
    <Input name="age" type="number" label="Age" required="Age Required" />
    <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select name="car" label="Car" initialValue="ms">
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <Checkbox name="married" label="Married?" />
    <Relevant when={({ formState }: any) => formState.values.married}>
      <Input name="spouse" label="Spouse" />
    </Relevant>
    <button type="submit">Submit</button>
    {/* <Debug /> */}
  </Form>
);

export default ExampleForm;
