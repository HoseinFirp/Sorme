import sormenew from "../../images/sormenew.png";
import userWhitenew from "../../images/userwhitenew.png";
import hidenew from "../../images/hidenew.png";
import viewnew from "../../images/viewnew.png";
import mail from "../../images/mail.png";
import sellerWhite from "../../images/sellerWhite.png";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorAlert from "../../Tools/alerts/ErrorAlert";
import { UserContext } from "../../App";
import LoaderDots from "../../Tools/Loaders/LoaderDots";
function SignInComp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setPathForgot } = useContext(UserContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setPathForgot("signup");
    validateEmail();
  }

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = regex.test(email);
    setIsValid(isValidEmail);
    if (isValidEmail === true) {
      setShowError(false);
      req();
    } else {
      setShowError("Please enter valid email");
    }
  };

  function handleLogin(e) {
    e.preventDefault();
    if (path === "user") {
      navigate("/login");
    }
    if (path === "seller") {
      navigate("/login-seller");
    }
  }

  const req = async () => {
    setShowError(false);
    setLoading(true);
    try {
      const { data } = await axios.post(
        `https://keykavoos-sorme.liara.run/${
          path === "seller" ? "Seller" : "user"
        }/Signup${path === "seller" ? "Seller" : ""}`,
        {
          username: `${username}`,
          password: `${password}`,
          email: `${email}`,
        }
      );
      console.log(data);
      const newEmail = { email: `${email}` };
      localStorage.setItem("userEmail", JSON.stringify(newEmail));
      setLoading(false);
      navigate("/entercode");
    } catch (error) {
      setLoading(false);
      setShowError(error.response.data.messages);
    }
  };
  const { path, setPath } = useContext(UserContext);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/signup-seller") {
      setPath("seller");
      localStorage.setItem("userPath", JSON.stringify("seller"));
    } else if (location.pathname === "/Signup") {
      setPath("user");
      localStorage.setItem("userPath", JSON.stringify("user"));
    }
  }, [location.pathname, path, setPath]);

  return (
    <div className="h-screen flex items-center justify-center bg-pink-100">
      {showError ? <ErrorAlert props={`${showError}`} /> : null}
      <form>
        <div className="flex glass flex-col rounded-2xl bg-pink-500  gap-3 items-center ">
          {path === "seller" ? (
            <div className="flex gap-2 mt-5 mr-9 self-end items-center">
              <p className="text-white">Seller</p>
              <img src={sellerWhite} className="h-7" />
            </div>
          ) : (
            <div className="mt-5"></div>
          )}
          <div className="flex items-center gap-36 justify-between">
            <p className="text-white text-xl font-bold">SignUp</p>
            <img
              src={sormenew}
              onClick={() => navigate("/")}
              className="cursor-pointer w-24 "
            />
          </div>
          <p className="text-white my-3">Enter username and password</p>
          <div className="flex gap-5 flex-col">
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
                <input
                  type="text"
                  id="floating_outlined1"
                  className="block text-white px-2.5 pb-2.5 pt-4 w-full text-sm border-2   bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label
                  htmlFor="floating_outlined1"
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
                  type="email"
                  id="floating_outlined2"
                  className="block text-white px-2.5 pb-2.5 pt-4 w-full text-sm border-2   bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValid(true);
                  }}
                />
                <label
                  htmlFor="floating_outlined2"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email Address
                </label>
              </div>
              <img src={mail} className="w-10 -translate-x-full pr-2" />
            </div>
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
                <input
                  type={!showPass ? "password" : "text"}
                  id="floating_outlined3"
                  className="block text-white px-2.5 pb-2.5 pt-4 w-full text-sm border-2   bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="floating_outlined3"
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
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-white btn disabled:bg-pink-600 disabled:text-pink-200 px-5 py-3 w-48 active:bg-pink-300 border-none hover:bg-pink-200  mx-10 rounded-lg font-bold text-pink-500"
              onClick={(e) => handleSubmit(e)}
              disabled={!username || !password || !email || !isValid || loading}
            >
              {loading ? <LoaderDots /> : "Create Your Account"}
            </button>
          </div>

          <div>
            <p className="text-white mt-2 text-sm ">Already have an account?</p>
            <p className="text-white">
              - - - - - - - - - - - - - - - - - - - - - - - - - -
            </p>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="text-white btn bg-transparent border-none hover:bg-transparent active:text-pink-200 text-lg px-3 w-full py-2 pt-3 mb-3 font-bold "
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInComp;
