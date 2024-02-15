import userWhitenew from "../../images/userWhitenew.png";
import sormenew from "../../images/sormenew.png";
import sellerWhite from "../../images/sellerWhite.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";
import ErrorAlert from "../../Tools/alerts/ErrorAlert";
import { UserContext } from "../../App";
import LoaderDots from "../../Tools/Loaders/LoaderDots";
import { useUser } from "../../Slicers/userSlice";

function ForgotComp() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const { path, setPathForgot } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    setPathForgot("forgot");
    req();
  }
  const req = async () => {
    setShowAlert(false);
    setShowError(false);
    setLoading(true);

    console.log(username);
    console.log(path);
    try {
      const { data } = await axios.put(
        `https://keykavoos-sorme.liara.run/user/get-otp${
          path === "seller" ? "-Seller" : ""
        }`,
        { username: `${username}` }
      );
      console.log(data);
      setLoading(false);

      setShowAlert(data.message);

      const newUsername = { username: `${username}` };
      localStorage.setItem("userUsername", JSON.stringify(newUsername));

      setTimeout(() => {
        if (path === "seller") {
          navigate("/entercode-seller");
        } else if (path === "user") {
          navigate("/entercode");
        }
      }, 2000);
    } catch (error) {
      setLoading(false);

      setShowError(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pink-100">
      {showAlert ? <SuccessAlert props={`${showAlert}`} /> : null}
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
          <div className="flex items-center gap-10 justify-between">
            <p className="text-white text-xl font-bold">Forgot Password</p>
            <img
              src={sormenew}
              onClick={() => navigate("/")}
              className="w-24 cursor-pointer"
            />
          </div>
          <div className="flex gap-2 items-center flex-col">
            <p className="text-white text-sm my-3">
              Enter your username to recover your password
            </p>
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
                <input
                  type="text"
                  id="floating_outlined10"
                  className="block  px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label
                  htmlFor="floating_outlined10"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Username
                </label>
              </div>
              <img src={userWhitenew} className="w-10 -translate-x-full pr-2" />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              disabled={!username || loading}
              onClick={handleSubmit}
              type="submit"
              className=" btn mb-4 disabled:bg-pink-600 disabled:text-pink-200 bg-transparent w-72 border-none hover:bg-pink-200 bg-white text-pink-500 active:bg-pink-300  px-3  py-2  my-2 font-bold "
            >
              {loading ? <LoaderDots /> : "Confirm"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotComp;
