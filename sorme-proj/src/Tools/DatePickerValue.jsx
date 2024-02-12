// import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext, useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs";
import { UserContext } from "../App";

export default function DatePickerValue() {
  const [inputBirth, setInputBirth] = useState("");
  useEffect(() => {
    const storedValue = localStorage.getItem("inputBirth");
    if (storedValue) {
      setInputBirth(storedValue);
    }
  }, []);

  const handleChange = (event) => {
    setInputBirth(event);
    console.log(event);
    localStorage.setItem("inputBirth", event);
    setDate(event)
  };


  const { setDate } = useContext(UserContext);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Date of Birth"
            value={dayjs(inputBirth)}
            onChange={handleChange}
            className="bg-pink-100 disabled:bg-slate-400"
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
