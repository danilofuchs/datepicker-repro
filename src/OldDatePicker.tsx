import "react-datepicker-old/dist/react-datepicker.css";
import ReactDatePickerOld from "react-datepicker-old";
import { useState } from "react";

export const OldDatePicker = () => {
  const [open, setOpen] = useState(false);

  return (
    <ReactDatePickerOld
      open={open}
      preventOpenOnFocus // We control the state
      shouldCloseOnSelect // We control the state
      onCalendarOpen={() => {
        console.log("OPEN [7.5.0]");
        setOpen(true);
      }}
      onCalendarClose={() => {
        console.log("CLOSE [7.5.0]");
        setOpen(false);
      }}
      onFocus={() => {
        console.log("FOCUS [7.5.0]");
        setOpen(true);
      }}
    />
  );
};
