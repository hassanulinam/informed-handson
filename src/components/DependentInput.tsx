import { Form, Input, useFormApi } from "informed";

const DependentInput = () => {
  const { setValue, getValue } = useFormApi();

  return (
    <Form>
      {({ formApi }: any) => (
        <>
          <Input
            name="num1"
            label="Num-1: "
            onChange={() => {
              const n1: any = formApi.getValue("num1");
              formApi.setValue(
                "num2",
                `${n1} + 2 = ${(parseInt(n1) || 0) + 2}`
              );
            }}
            defaultValue="0"
          />
          <Input name="num2" label="Num-2: " />
        </>
      )}
    </Form>
  );
};

export default DependentInput;
