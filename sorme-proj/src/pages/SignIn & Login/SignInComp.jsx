import sormenew from "../../images/sormenew.png";
import userWhitenew from "../../images/userWhitenew.png";
import hidenew from "../../images/hidenew.png";
import viewnew from "../../images/viewnew.png";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";
import ErrorAlert from "../../Tools/alerts/ErrorAlert";
import {
  updateEmail,
  updateId,
  updateName,
  updatePosition,
  updateToken,
} from "../../user/userSlice";

function SignInComp() {
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();

  function handleGoCreate(e) {
    e.preventDefault();
    navigate("/signup");
  }
  function handleForgot(e) {
    e.preventDefault();
    navigate("/forgotpassword");
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    req();
  }

  const req = async () => {
    setShowError(false);
    setShowAlert(false);
    try {
      const { data } = await axios.post(
        "https://keykavoos-sorme.liara.run/user/login",
        {
          username: `ahmad1`,
          password: `Mm123456`,
        }
      );
      console.log(data);
      setShowAlert(true);
      dispatch(updateName(data.username));
      dispatch(updateToken(data.token));
      dispatch(updateEmail(data.email));
      dispatch(updatePosition(data.position));
      dispatch(updateId(data._id));

      setTimeout(() => {
        navigate("/dashboard-panel");
      }, 1500);
    } catch (error) {
      console.log(error);
      setShowError(error.response.data.messages);
    }
  };
  return (
    <div className="h-screen  flex items-center justify-center bg-pink-100">
      {showAlert ? <SuccessAlert props={"Welcome to SORME !"} /> : null}
      {showError ? <ErrorAlert props={`${showError}`} /> : null}
      <form>
        <div className="flex glass flex-col rounded-2xl bg-pink-500 gap-3 items-center">
          <div className="flex items-center mt-5 gap-36 justify-between">
            <p className="text-white text-xl font-bold">Login</p>
            <img src={sormenew} className="w-24 " />
          </div>
          <p className="text-white my-3">Enter username and password</p>
          <div className="flex gap-5 flex-col">
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
                <input
                  type="text"
                  id="floating_outlined1"
                  className="block  px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  autoFocus
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Username
                </label>
              </div>
              <img src={userWhitenew} className="w-10 -translate-x-full pr-2" />
            </div>
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
                <input
                  type={!showPass ? "password" : "text"}
                  id="floating_outlined2"
                  className="block  px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
              <img
                src={!showPass ? hidenew : viewnew}
                onClick={() => setShowPass(!showPass)}
                className="w-10 cursor-pointer -translate-x-full pr-2 "
              />
            </div>
          </div>
          <div className="flex mt-2 gap-2">
            <button
              type="submit"
              className=" btn bg-transparent w-36 border-none hover:bg-pink-200 bg-white text-pink-500 active:bg-pink-300  px-3  py-2   font-bold "
              onClick={handleSubmit}
            >
              Login to account
            </button>
            <button
              onClick={handleForgot}
              className=" btn bg-pink-600 w-36 border-none hover:bg-pink-700 bg-pink-00 text-white active:bg-pink-800  px-3  py-2   font-bold "
            >
              Forgot Password
            </button>
          </div>
          <div>
            <p className="text-white mt-2 text-sm ">
              Don&apos;t have an account yet?
            </p>
            <p className="text-white">
              - - - - - - - - - - - - - - - - - - - - - - - - - -
            </p>
            <button
              onClick={handleGoCreate}
              className="text-white btn bg-transparent border-none hover:bg-transparent active:text-pink-200 text-lg px-3 w-full py-2 pt-3 mb-3 font-bold "
            >
              Create an account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInComp;
