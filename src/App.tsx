import "./App.css";
import { NewDatePicker } from "./NewDatePicker";
import { OldDatePicker } from "./OldDatePicker";

function App() {
  return (
    <div className="App">
      <div>
        7.5.0
        <OldDatePicker />
      </div>
      <div>
        7.6.0
        <NewDatePicker />
      </div>
    </div>
  );
}

export default App;
