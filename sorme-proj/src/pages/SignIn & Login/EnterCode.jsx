import axios from "axios";
import sormenew from "../../images/sormenew.png";
import sellerWhite from "../../images/sellerWhite.png";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../../Tools/CountDown";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";
import { UserContext } from "../../App";
import ErrorAlert from "../../Tools/alerts/ErrorAlert";
import { useDispatch } from "react-redux";
import { updateToken } from "../../user/userSlice";

function EnterCode() {
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();
  const [code, setCode] = useState();
  const [email, setEmail] = useState();
  const [showError, setShowError] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const { pathForgot } = useContext(UserContext);

  const finalCode = [];

  const handleInputChange = (e, nextInputRef) => {
    const maxLength = parseInt(e.target.maxLength, 10);
    const currentValue = e.target.value;
    const numericValue = currentValue.replace(/[^0-9]/g, "");

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
    if (pathForgot === "forgot") {
      navigate("/forgotpassword/newpassword");
    } else if (pathForgot === "signup") {
      req();
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("userEmail");
    if (storedData) {
      setEmail(JSON.parse(storedData));
    }
  }, []);
  const dispatch = useDispatch();
  const req = async () => {
    setShowAlert(false);
    console.log(email);
    try {
      const { data } = await axios.post(
        `https://keykavoos-sorme.liara.run/${
          path === "seller" ? "Seller" : "user"
        }/Signup_OTP`,
        {
          email: `${email.email}`,
          OTP: `2024`,
        }
      );
      console.log(data);
      setShowAlert(true);
      dispatch(updateToken(data.token));
      setTimeout(() => {
        navigate("/dashboard-panel");
      }, 2000);
    } catch (error) {
      console.log(error);
      setShowError(error.response.data.message);
    }
  };

  const { path } = useContext(UserContext);

  return (
    <div className="h-screen flex items-center justify-center bg-pink-100">
      {showError ? <ErrorAlert props={`${showError}`} /> : null}
      {showAlert ? (
        <SuccessAlert
          props={
            pathForgot === "signup"
              ? "User created successfuly"
              : "The password changed succesfuly"
          }
        />
      ) : null}
      <form>
        <div className="flex flex-col glass rounded-2xl bg-pink-500 gap-3 items-center">
          {path === "seller" ? (
            <div className="flex gap-2 mt-5 mr-9 self-end items-center">
              <p className="text-white">Seller</p>
              <img src={sellerWhite} className="h-7" />
            </div>
          ) : (
            <div className="mt-5"></div>
          )}

          <div className="flex items-center gap-36 justify-between">
            <p className="text-white text-xl font-bold">Code Sent!</p>
            <img src={sormenew} className="w-24 " />
          </div>
          <div>
            <p className="text-white mt-3 self-start ">
              Enter the code you received
            </p>
            <p className="text-white mt-3 self-start  text-center">
              The code is : 2 0 2 4
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
