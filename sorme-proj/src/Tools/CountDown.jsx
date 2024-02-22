import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "../Slicers/userSlice";

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [showButton, setShowButton] = useState(false);
  const [turnOn, setTurnOn] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (turnOn) {
      if (seconds <= 0) {
        return;
      }
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds, turnOn]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  };
  useEffect(() => {
    if (!seconds) {
      dispatch(updateToken(""));
      setTurnOn(false);
      setShowButton(true);
    }
  }, [seconds]);

  function handleStart(e) {
    e.preventDefault();
    setShowButton(false);
    setTurnOn(true);
    setSeconds(90);
  }
  return (
    <span className="flex justify-center">
      {showButton ? (
        <button
          onClick={handleStart}
          className=" bg-transparent border-none text-white"
        >
          Resend the code
        </button>
      ) : (
        <span className="text-2xl min-w-32 text-center">
          {formatTime(seconds)}
        </span>
      )}
    </span>
  );
};

export default CountdownTimer;
