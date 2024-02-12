import sormenew from "../../images/sormenew.png";
import userWhitenew from "../../images/userWhitenew.png";
import hidenew from "../../images/hidenew.png";
import viewnew from "../../images/viewnew.png";
import sellerWhite from "../../images/sellerWhite.png";
import axios from "axios";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";
import ErrorAlert from "../../Tools/alerts/ErrorAlert";
import { updateToken } from "../../user/userSlice";
import { UserContext } from "../../App";
import LoaderDots from "../../Tools/Loaders/LoaderDots";

function SignInComp() {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleGoCreate(e) {
    e.preventDefault();
    if (path === "user") {
      navigate("/signup");
    }
    if (path === "seller") {
      navigate("/signup-seller");
    }
  }

  function handleForgot(e) {
    e.preventDefault();
    if (path === "seller") {
      navigate("/forgotpassword-seller");
    } else if (path === "user") {
      navigate("/forgotpassword");
    }
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    req();
  }

  const req = async () => {
    setShowError(false);
    setShowAlert(false);
    setLoading(true);

    console.log(path);
    try {
      const { data } = await axios.post(
        `https://keykavoos-sorme.liara.run/${
          path === "seller" ? "Seller" : "user"
        }/Login${path === "seller" ? "Seller" : ""}`,
        {
          username: `${username}`,
          password: `${password}`,
        }
      );

      console.log(data);
      setShowAlert(true);

      dispatch(updateToken(data.token));

      // dispatch(updateName(data.username));
      // dispatch(updateEmail(data.email));
      // dispatch(updatePosition(data.position));
      // dispatch(updateId(data._id));

      setLoading(false);
      setTimeout(() => {
        navigate("/dashboard-panel");
      }, 1500);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShowError(error.response.data.message);
    }
  };
  const { path } = useContext(UserContext);

  return (
    <div className="h-screen  flex items-center justify-center bg-pink-100">
      {showAlert ? <SuccessAlert props={"Welcome to SORME !"} /> : null}
      {showError ? <ErrorAlert props={`${showError}`} /> : null}
      <form>
        <div className="flex glass flex-col rounded-2xl bg-pink-500 gap-3 items-center">
          {path === "seller" ? (
            <div className="flex gap-2 mt-5 mr-9 self-end items-center">
              <p className="text-white">Seller</p>
              <img src={sellerWhite} className="h-7" />
            </div>
          ) : (
            <div className="mt-5"></div>
          )}
          <div className="flex items-center  gap-36 justify-between">
            <p className="text-white text-xl font-bold">Login</p>
            <img
              src={sormenew}
              onClick={() => navigate("/")}
              className="w-24 cursor-pointer"
            />
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
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
              className=" btn disabled:bg-pink-600 disabled:text-pink-200 bg-transparent w-36 border-none hover:bg-pink-200 bg-white text-pink-500 active:bg-pink-300  px-3  py-2   font-bold "
              onClick={handleSubmit}
              disabled={!username || !password || loading}
            >
              {loading ? <LoaderDots /> : "Login to account"}
            </button>
            <button
              onClick={handleForgot}
              disabled={loading}
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
              disabled={loading}
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
