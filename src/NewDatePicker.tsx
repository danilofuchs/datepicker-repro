import "react-datepicker-new/dist/react-datepicker.css";
import ReactDatePickerNew from "react-datepicker-new";
import { useState } from "react";

export const NewDatePicker = () => {
  const [value, setValue] = useState<Date | null>(null);

  const [open, setOpen] = useState(false);

  return (
    <ReactDatePickerNew
      selected={value}
      onChange={(date) => setValue(date)}
      open={open}
      preventOpenOnFocus
      shouldCloseOnSelect
      portalId="date-picker-portal"
      adjustDateOnChange
      onCalendarOpen={() => {
        setOpen(true);
      }}
      onCalendarClose={() => {
        setOpen(false);
      }}
      onFocus={() => setOpen(true)}
    />
  );
};
