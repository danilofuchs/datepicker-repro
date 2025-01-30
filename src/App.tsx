import "./App.css";
import ReactDatePickerNew from "react-datepicker-new";
import ReactDatePickerOld from "react-datepicker-old";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <ReactDatePickerNew preventOpenOnFocus withPortal />
      <ReactDatePickerOld preventOpenOnFocus withPortal />
    </div>
  );
}

export default App;
