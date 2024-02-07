import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "../user/userSlice";

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [showButton, setShowButton] = useState(false);
  const [turnOn, setTurnOn] = useState(true);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  useEffect(() => {
    // Exit early if countdown is finished
    if (turnOn) {
      if (seconds <= 0) {
        return;
      }

      // Set up the timer
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // Clean up the timer
      return () => clearInterval(timer);
    }
  }, [seconds, turnOn]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes} : ${seconds}`;
  };

  useEffect(() => {
    if (!seconds) {
      dispatch(updateToken(""));
      setTurnOn(false);
      //   navigate('/login')
      setShowButton(true);
    }
  }, [seconds]);

  function handleStart(e) {
    e.preventDefault()
    setShowButton(false)
    setTurnOn(true)
    setSeconds(90)
  }
  return (
    <span>
      {showButton ? (
        <button onClick={handleStart} className=" bg-transparent border-none text-white">Resend the code </button>
      ) : (
        <span className="text-lg">{formatTime(seconds)}</span>
      )}
    </span>
  );
};

export default CountdownTimer;
