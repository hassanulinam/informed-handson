import { Form, Input, Select, Relevant, Debug /* Scope */ } from "informed";

const ScopedRelevance = () => {
  return (
    <Form>
      {/*  <Scope scope="child">
        <Input name="age" type="number" label="How old is your child?" />
        <Relevant
          when={({ formApi, scope }: any) =>
            formApi.getValue(`${scope}.age`) >= 16
          }
        >
          <Select name="car" label="What car do they drive?">
            <option value="ms">Model S</option>
            <option value="m3">Model 3</option>
            <option value="mx">Model X</option>
            <option value="my">Model Y</option>
          </Select>
        </Relevant>
      </Scope>
      <Debug /> */}
    </Form>
  );
};

export default ScopedRelevance;
