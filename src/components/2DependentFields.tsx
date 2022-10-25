/* 
import {
  Form,
  RadioGroup,
  Radio,
  Select,
  useFieldState,
  useFieldApi,
} from "informed";
import { useEffect, useMemo } from "react";
/
const options = {
  car: [
    {
      value: "",
      label: "- Select -",
      disabled: true,
    },
    {
      value: "modelS",
      label: "Model S",
    },
    {
      value: "model3",
      label: "Model 3",
    },
    {
      value: "modelX",
      label: "Model X",
    },
    {
      value: "modely",
      label: "Model Y",
    },
  ],
  truck: [
    {
      value: "",
      label: "- Select -",
      disabled: true,
    },
    {
      value: "semi",
      label: "Semi Truck",
    },
    {
      value: "cyber",
      label: "Cyber Truck",
    },
  ],
};

const CarOrTruck = () => {
  return (
    <>
      <label>Would you like a car or truck?</label>
      <RadioGroup name="type" initialValue="car">
        <Radio value="car" label="Car" />
        <Radio value="truck" label="Truck" />
      </RadioGroup>
    </>
  );
};

const ProductSelect = () => {
  const { value, dirty } = useFieldState("type");
  const { setValueQuietly } = useFieldApi("product");

  const opts = useMemo(() => options[parseF(value)], [value]);

  useEffect(() => {
    if (dirty) setValueQuietly("type");
  }, [value]);

  return (
    <Select name="product" label="Product" disabled={!value}>
      <option value="" disabled>
        - Select -
      </option>
      {opts.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

const DependentFields = () => (
  <Form>
    <CarOrTruck />
    <ProductSelect />
    <button type="submit">Submit</button>
  </Form>
); 
 */
const DependentFields = () => {
  return <div>DependentFields</div>;
};

export default DependentFields;
