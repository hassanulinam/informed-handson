import "./App.css";
import BasicForm from "./components/1BasicForm";
import DependentFields from "./components/2DependentFields";
import YupValidation from "./components/3YupValidation";
import DependentInput from "./components/DependentInput";
import BasicMultiStep from "./components/multi-step-forms/BasicMultiStep";

function App() {
  return (
    <div>
      <DependentInput />
    </div>
  );
}

export default App;
