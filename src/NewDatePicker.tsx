import "react-datepicker-new/dist/react-datepicker.css";
import ReactDatePickerNew from "react-datepicker-new";
import { useState } from "react";

export const NewDatePicker = () => {
  const [open, setOpen] = useState(false);

  return (
    <ReactDatePickerNew
      open={open}
      preventOpenOnFocus // We control the state
      shouldCloseOnSelect // We control the state
      onCalendarOpen={() => {
        console.log("OPEN [7.6.0]");
        setOpen(true);
      }}
      onCalendarClose={() => {
        console.log("CLOSE [7.6.0]");
        setOpen(false);
      }}
      onFocus={() => {
        console.log("FOCUS [7.6.0]");
        setOpen(true);
      }}
    />
  );
};
