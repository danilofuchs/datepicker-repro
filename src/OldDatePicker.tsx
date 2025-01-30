import "react-datepicker-new/dist/react-datepicker.css";
import ReactDatePickerOld from "react-datepicker-old";
import { useState } from "react";

export const OldDatePicker = () => {
  const [value, setValue] = useState<Date | null>(null);

  const [open, setOpen] = useState(false);

  return (
    <ReactDatePickerOld
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
