import axios from "axios";
import sormenew from "../../images/sormenew.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../../Tools/CountDown";
import { useUser } from "../../user/userSlice";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";

function EnterCode() {
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();
  const [code, setCode] = useState();
  const [email, setEmail] = useState();
  const [showAlert, setShowAlert] = useState(false);

  // console.log(code);

  const finalCode = [];

  useEffect(() => {
    console.log(code);
  }, [code]);

  const handleInputChange = (e, nextInputRef) => {
    const maxLength = parseInt(e.target.maxLength, 10);
    const currentValue = e.target.value;
    // Validate input to allow only numeric characters
    const numericValue = currentValue.replace(/[^0-9]/g, "");

    // Update the input value with the numeric characters
    // e.target.value = numericValue;

    finalCode.push(numericValue);

    if (finalCode.length === 4) {
      setCode(finalCode.join(""));
    }
    if (numericValue.length === maxLength && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    req();
  }

  const navigate = useNavigate();
  // const user = useUser();
  // console.log(user);

  useEffect(() => {
    const storedData = localStorage.getItem("userEmail");
    if (storedData) {
      setEmail(JSON.parse(storedData));
    }
  }, []);

  const req = async () => {
    setShowAlert(false);

    try {
      const { data } = await axios.post(
        "https://keykavoos-sorme.liara.run/user/Signup_OTP",
        {
          email: `${email.email}`,
          OTP: `2024`,
        }
      );
      console.log(data);
      setShowAlert(true);
       setTimeout(() => {
        navigate("/dashboard-panel");
      }, 2000);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-pink-100">
      {showAlert ? <SuccessAlert props={"user created successfuly"} /> : null}
      <form>
        <div className="flex flex-col glass rounded-2xl bg-pink-500 gap-3 items-center">
          <div className="flex items-center mt-5 gap-36 justify-between">
            <p className="text-white text-xl font-bold">Code Sent!</p>
            <img src={sormenew} className="w-24 " />
          </div>
          <div>
            <p className="text-white mt-3 self-start ">
              Enter the code you received
            </p>
          </div>
          <div className="flex mt-4 mb-4 mx-5 gap-2">
            <div className="w-20 h-20 bg-pink-200 flex justify-center items-center rounded-lg ">
              <input
                type="text"
                maxLength="1"
                autoFocus
                className="text-center text-2xl font-bold text-gray-700 w-14 pb-3 mt-3 outline-none border-b-2 border-gray-600  bg-pink-200"
                onInput={(e) => handleInputChange(e, secondInputRef)}
              />
            </div>
            <div className="w-20 h-20 bg-pink-200 flex justify-center items-center rounded-lg ">
              <input
                type="text"
                maxLength="1"
                ref={secondInputRef}
                className="text-center w-14 text-2xl font-bold text-gray-700 pb-3 mt-3 outline-none border-b-2 border-gray-600  bg-pink-200"
                onInput={(e) => handleInputChange(e, thirdInputRef)}
              />
            </div>

            <div className="w-20 h-20 bg-pink-200 flex justify-center items-center rounded-lg ">
              <input
                type="text"
                maxLength="1"
                ref={thirdInputRef}
                className="text-center text-2xl w-14 font-bold text-gray-700 pb-3 mt-3 outline-none border-b-2 border-gray-600  bg-pink-200"
                onInput={(e) => handleInputChange(e, fourthInputRef)}
              />
            </div>
            <div className="w-20 h-20 bg-pink-200 flex justify-center items-center rounded-lg ">
              <input
                type="text"
                maxLength="1"
                className="text-center text-2xl font-bold text-gray-700 w-14 pb-3 mt-3 outline-none border-b-2 border-gray-600  bg-pink-200"
                ref={fourthInputRef}
                onInput={(e) => handleInputChange(e, fourthInputRef)}
              />
            </div>
          </div>

          <p className="text-white flex items-center gap-2">
            <CountdownTimer initialSeconds={90} />
            Until resend
          </p>
          <button
            disabled={!code}
            onClick={(e) => handleSubmit(e)}
            className="bg-pink-600 btn px-5 py-3 my-3 active:bg-pink-800 border-none hover:bg-pink-700  mx-10 rounded-lg font-bold text-white"
          >
            Confirm
          </button>

          <div></div>
        </div>
      </form>
    </div>
  );
}

export default EnterCode;

// CodeInput.js
// CodeInput.js

// import { useRef} from 'react';

// const CodeInput = () => {
// const secondInputRef = useRef();
// const thirdInputRef = useRef();
// const forthInputRef = useRef();

// const handleInputChange = (e, nextInputRef) => {
//   const maxLength = parseInt(e.target.maxLength, 10);
//   const currentValue = e.target.value;

//   if (currentValue.length === maxLength) {
//     nextInputRef.current.focus();
//   }
// };

//   return (
//     <form>
//     <input
//       type="text"
//       maxLength="1"
//       onInput={(e) => handleInputChange(e, secondInputRef)}
//     />
//     <input
//       type="text"
//       maxLength="1"
//       ref={secondInputRef}
//       onInput={(e) => handleInputChange(e, thirdInputRef)}
//     />
//     <input
//       type="text"
//       maxLength="1"
//       ref={thirdInputRef}
//       onInput={(e) => handleInputChange(e, forthInputRef)}

//     /><input
//     type="text"
//     maxLength="1"
//     ref={forthInputRef}
//   />
//   </form>
//   );
// };

// export default CodeInput;
