import {
  Form,
  Input,
  Multistep,
  Checkbox,
  Debug,
  useMultistepApi,
  MultistepApi,
  MultistepState,
} from "informed";

const Info = () => {
  const { next } = useMultistepApi();
  return (
    <Multistep.Step step="info">
      <Input name="first" label="First Name" required />
      <Input name="last" label="First Name" required />
      <button type="button" onClick={next}>
        Next
      </button>
    </Multistep.Step>
  );
};

const Favorite = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="button" onClick={next}>
          Next
        </button>
      </div>
    </Multistep.Step>
  );
};

const Additional = () => {
  const { previous } = useMultistepApi();
  return (
    <Multistep.Step step="additional">
      <Input name="height" label="Height:" required />
      <Input name="weight" label="Weight:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
    </Multistep.Step>
  );
};

const BasicMultiStep = () => (
  <Form>
    <Multistep>
      {(props: MultistepApi & MultistepState) => (
        <div>
          <Info />
          <Favorite />
          <Additional />
        </div>
      )}
    </Multistep>
    <Debug />
  </Form>
);

export default BasicMultiStep;
