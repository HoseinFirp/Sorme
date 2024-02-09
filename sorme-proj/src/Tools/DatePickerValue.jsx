// import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { useEffect } from "react";
import { updateBirth, useUser } from "../user/userSlice";
import { useDispatch } from "react-redux";

export default function DatePickerValue() {
  // const [value, setValue] = useState();
  const { date, setDate } = useContext(UserContext);
  const user = useUser();
  console.log(user);
  // console.log(date);

  // function handleDate(e) {
  //   setDate(e);
  //   const newDate = { date: `${date}` };
  //   localStorage.setItem("userBirthday", JSON.stringify(newDate));
  // }

  // useEffect(() => {
  //   const storedData = localStorage.getItem("userBirthday");
  //   if (storedData) {
  //     setDate(JSON.parse(storedData));
  //   }
  // }, []);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Date of Birth"
            value={date}
            onChange={(e)=>setDate(e)}
            className="bg-pink-100"
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
