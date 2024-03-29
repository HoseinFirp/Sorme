import { useNavigate } from "react-router-dom";
import hidenew from "../../images/hidenew.png";
import viewnew from "../../images/viewnew.png";
import sellerWhite from "../../images/sellerWhite.png";
import sormenew from "../../images/sormenew.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";
import ErrorAlert from "../../Tools/alerts/ErrorAlert";
import LoaderDots from "../../Tools/Loaders/LoaderDots";

function NewPassComp() {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { path } = useContext(UserContext);
  const [username, setUsername] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    req();
  }

  useEffect(() => {
    const storedData = localStorage.getItem("userUsername");
    if (storedData) {
      setUsername(JSON.parse(storedData));
    }
  }, []);

  const req = async () => {
    setShowAlert(false);
    setLoading(true);
    try {
      const { data } = await axios.put(
        `https://keykavoos-sorme.liara.run/${
          path === "seller" ? "Seller" : "user"
        }/forget_password${path === "seller" ? "-Seller" : ""}`,
        {
          username: `${username.username}`,
          NewPassword: `${password}`,
          confirmPassword: `${passwordConfirm}`,
          OTP: "2024",
        }
      );
      console.log(data);
      setLoading(false);
      setShowAlert(true);
      setTimeout(() => {
        if (path === "seller") {
          navigate("/login-seller");
        } else if (path === "user") {
          navigate("/login");
        }
      }, 2000);
    } catch (error) {
      setLoading(false);
      setShowError(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pink-100">
      {showAlert ? (
        <SuccessAlert props={"Your Password change successfully"} />
      ) : null}
      {showError ? <ErrorAlert props={`${showError}`} /> : null}

      <form>
        <div className="flex glass flex-col rounded-2xl bg-pink-500 gap-3 items-center ">
          {path === "seller" ? (
            <div className="flex gap-2 mt-5 mr-9 self-end items-center">
              <p className="text-white">Seller</p>
              <img src={sellerWhite} className="h-7" />
            </div>
          ) : (
            <div className="mt-5"></div>
          )}
          <div className="flex items-center  gap-5 justify-between">
            <p className="text-white text-xl font-bold">Re-Asign Password</p>
            <img
              src={sormenew}
              onClick={() => navigate("/")}
              className="w-24 cursor-pointer"
            />
          </div>
          <div className="flex gap-5 mb-2 items-center flex-col">
            <p className="text-white text-sm my-1">Enter your new password</p>
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
                <input
                  type={!showPass1 ? "password" : "text"}
                  id="floating_outlined1"
                  className="block  px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="floating_outlined1"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  New Password
                </label>
              </div>
              <img
                src={!showPass1 ? hidenew : viewnew}
                onClick={() => setShowPass1(!showPass1)}
                className="w-10 cursor-pointer -translate-x-full pr-2 "
              />
            </div>
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
                <input
                  type={!showPass2 ? "password" : "text"}
                  id="floating_outlined2"
                  className="block  px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <label
                  htmlFor="floating_outlined2"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Confirm Password
                </label>
              </div>
              <img
                src={!showPass2 ? hidenew : viewnew}
                onClick={() => setShowPass2(!showPass2)}
                className="w-10 cursor-pointer -translate-x-full pr-2 "
              />{" "}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={loading || !password || !passwordConfirm}
              className="bg-white disabled:bg-pink-600 disabled:text-pink-200 px-2 mb-5 py-3 w-full mx-10 rounded-lg font-bold text-pink-500"
              onClick={handleSubmit}
            >
              {loading ? <LoaderDots /> : "Confirm"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPassComp;
