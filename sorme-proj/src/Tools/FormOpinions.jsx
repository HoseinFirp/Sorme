import axios from "axios";
import { useContext, useState } from "react";
import SuccessAlert from "./alerts/SuccessAlert";
import ErrorAlert from "./alerts/ErrorAlert";
import LoaderDots from "./Loaders/LoaderDots";
import { useUser } from "../Slicers/userSlice";
import { useLocation } from "react-router-dom";
import { UserContext } from "../App";

function FormOpinions() {
  const [showError, setShowError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState();
  const [message, setMessage] = useState("");
  const user = useUser();
  const location = useLocation();
  const { path, support } = useContext(UserContext);


  function handleSubmit(e) {
    e.preventDefault();
    if (location.pathname === "/") {
      req1();
    } else {
      if (user.email === email) {
        req();
      } else {
        setShowError("Email doesn't match with your email");
      }
    }
  }

  const req1 = async () => {
    setShowError(false);
    setShowAlert(false);
    setLoading(true);

    // console.log(path);
    try {
      const { data } = await axios.post(
        `https://keykavoos-sorme.liara.run/user/support`,
        {
          name: `${username}`,
          email: `${email}`,
          message: `${message}`,
        }
      );

      console.log(data);
      setShowAlert(true);
      setLoading(false);
      setUsername("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShowError(error.response.data.message);
    }
  };

  const req = async () => {
    setShowError(false);
    setShowAlert(false);
    setLoading(true);
    
    try {
      const { data } = await axios.post(
        `https://keykavoos-sorme.liara.run/user/support_User`,
        {
          name: `${username}`,
          email: `${email}`,
          message: `${message}`,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setShowAlert(true);
      setLoading(false);
      setMessage("");
      console.log(data);
      if (path === "admin") {
        setDisable(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShowError(error.response.data.messages);
    }
  };

  return (
    <div>
      {showAlert ? (
        <SuccessAlert props={"Your ticket registered successfully "} />
      ) : null}
      {showError ? <ErrorAlert props={`${showError}`} /> : null}
      <form className="grid  grid-cols-2 gap-x-5 gap-y-3">
        <div className="relative">
          <input
            type="text"
            id="floating_outlined1"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-pink-300 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
            disabled={loading || disable}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="floating_outlined1"
            className="absolute text-sm rounded-lg text-pink-500 font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="floating_outlined2"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-pink-300 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
            disabled={loading || disable}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="floating_outlined2"
            className="absolute text-sm rounded-lg text-pink-500 font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Email
          </label>
        </div>
        <div className="relative h-64 col-span-2">
          <input
            type="text"
            id="floating_outlined3"
            className="block  break-all px-2.5 pb-2.5 h-full pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-pink-300 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <label
            htmlFor="floating_outlined3"
            className="absolute text-sm text-pink-500 font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            {path === "admin" ? "hi" : "Your Message"}
          </label>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!username || !email || !message}
          className={` btn border-none ${
            path === "admin" ? "hidden" : ""
          }  bg-custom-bg-pink hover:bg-pink-500 active:bg-pink-600 transition duration-300 justify-self-center font-bold text-xl col-span-2 text-custom-white w-28 p-7 pt-0 pb-1 rounded-xl`}
        >
          {loading ? <LoaderDots /> : "Send"}
        </button>
      </form>
    </div>
  );
}

export default FormOpinions;
