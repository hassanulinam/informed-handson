import { Form, Input } from "informed";

const DependentInput = () => {
  return (
    <Form>
      {({ formApi }: any) => (
        <>
          <Input
            name="num1"
            label="Num-1: "
            onChange={() => {
              const n1: any = parseInt(formApi.getValue("num1")) || 0;
              formApi.setValue("num2", `${n1} + 2 = ${n1 + 2}`);
            }}
          />
          <br />
          <br />
          <Input name="num2" label="Num-2: " />
        </>
      )}
    </Form>
  );
};

export default DependentInput;
