import { useContext, useEffect, useState } from "react";
import DatePickerValue from "../../Tools/DatePickerValue";

import axios from "axios";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoaderDots from "../../Tools/Loaders/LoaderDots";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";
import ErrorAlert from "../../Tools/alerts/ErrorAlert";
import {
  updateAddress,
  updateAvatar,
  updateBirth,
  updateEmail,
  updateFullname,
  updateId,
  updateName,
  updatePosition,
  updateToken,
  useUser,
} from "../../Slicers/userSlice";

function DashSettings() {
  const user = useUser();
  const [fullName, setFullName] = useState(user.fullname);
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmassword] = useState();
  const [avatar, setAvatar] = useState(`${user.avatar}`);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [loadingConfirm, setLoadingConfirm] = useState(false);

  const [showError1, setShowError1] = useState(false);
  const [showError2, setShowError2] = useState(false);
  const [showError3, setShowError3] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const { setPath, path, date } = useContext(UserContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    req();
  }

  function handleLogout(e) {
    setLoadingLogout(true);
    e.preventDefault();
   
    dispatch(updateName(""));
    dispatch(updateFullname(""));
    dispatch(updateEmail(""));
    dispatch(updatePosition(""));
    dispatch(updateId(""));
    dispatch(updateAddress(""));
    dispatch(updateBirth(""));
    setPath("");
    setTimeout(() => {
      dispatch(updateToken(""));
      navigate("/");
      setLoadingLogout(false);
    }, 1500);
  }
  useEffect(() => {
    const storedValue = localStorage.getItem(`input${user.username}Address`);

    if (storedValue) {
      setAddress(storedValue);
    }
  }, [user.username]);

  const req = async () => {
    setShowAlert1(false);
    setShowAlert2(false);
    setShowAlert3(false);

    setShowError1(false);
    setShowError2(false);
    setShowError3(false);
    setLoadingConfirm(true);

    const dateOfBirth = `${date.$y}, ${date.$M + 1}, ${date.$D}`;

    try {
      const { data } = await axios.put(
        `https://keykavoos-sorme.liara.run/user/Updata-Profile`,
        {
          fullname: `${fullName}`,
          username: `${user.username}`,
          address: `${address}`,
          date_Of_Brith: `${dateOfBirth}`,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(updateFullname(fullName));
      setLoadingConfirm(false);
      localStorage.setItem(`input${user.username}Address`, address);
      setShowAlert1(data.message);
    } catch (error) {
      setLoadingConfirm(false);
      setShowError1(error.response.data.message);
    }
    if (newPassword && confirmPassword) {
      try {
        const { data } = await axios.put(
          `https://keykavoos-sorme.liara.run/user/change-password`,
          {
            oldPassword: `${password}`,
            newPassword: `${newPassword}`,
            confirmNewPassword: `${confirmPassword}`,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setShowAlert2(data.message);
        setLoadingConfirm(false);
      } catch (error) {
        setLoadingConfirm(false);
        setShowError2(error.response.data.message);
      }
    }
    if (avatar) {
      const formData = new FormData();
      formData.append("photos", avatar);
      try {
        const { data } = await axios.put(
          `https://keykavoos-sorme.liara.run/${
            path === "seller" ? "Seller" : "user"
          }/upload-avatar`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setLoadingConfirm(false);
        setShowAlert3(data.message);
        dispatch(updateAvatar(avatar))
      } catch (error) {
        setLoadingConfirm(false);

        setShowError3(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col my-10 items-center gap-5 p-5 rounded-2xl mx-10 bg-pink-100">
      {showAlert1 ? <SuccessAlert props={`${showAlert1}`} /> : null}
      {showAlert2 ? <SuccessAlert props={`${showAlert2}`} /> : null}
      {showAlert3 ? <SuccessAlert props={`${showAlert3}`} /> : null}
      {showError1 ? <ErrorAlert props={`${showError1}`} /> : null}
      {showError2 ? <ErrorAlert props={`${showError2}`} /> : null}
      {showError3 ? <ErrorAlert props={`${showError3}`} /> : null}
      <form className="flex flex-col items-center gap-5">
        <div className="flex flex-col rounded-2xl pr-2 bg-white gap-5 ">
          <div className="lg:grid gap-5 m-2 mb-0 flex  flex-col lg:grid-cols-2">
            <div className="flex items-center order-3 lg:order-5">
              <p className="text-gray-600 px-3 min-w-40">Profile Picture :</p>
              <input
                type="file"
                className="file-input disabled:bg-slate-400 disabled:border-gray-400 file-input-bordered file-input-secondary w-full max-w-xs bg-pink-100"
                onChange={(e) => setAvatar(e.target.files[0])}
                disabled={loadingLogout || loadingConfirm}
              />
            </div>
            <div className="flex items-center order-4 lg:order-2">
              <p className="text-gray-600 px-3 min-w-40">Current Password :</p>
              <input
                type="password"
                id="floating_outlined1"
                className="block px-2.5 py-2  w-full text-sm border-2 disabled:bg-slate-400 text-pink-700 bg-gray-100 rounded-lg border-1 border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                placeholder=" "
                disabled={loadingLogout || loadingConfirm}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center order-2 lg:order-3">
              <p className="text-gray-600 px-3 min-w-40 ">Full Name :</p>
              <input
                type="text"
                id="floating_outlined2"
                className="block px-2.5 py-2  w-full text-sm border-2 disabled:bg-slate-400 text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                placeholder=" "
                defaultValue={fullName ? fullName : ""}
                disabled={loadingLogout || loadingConfirm}
                // onChange={(e) => setFirstname(e.target.value)}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex items-center order-5 lg:order-4">
              <p className="text-gray-600 px-3 min-w-40">New Password :</p>
              <input
                type="password"
                id="floating_outlined3"
                className="block px-2.5 py-2  w-full text-sm border-2 disabled:bg-slate-200 text-pink-700 bg-gray-100 rounded-lg border-1 border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                placeholder=" "
                disabled={!password || loadingLogout || loadingConfirm}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center order-1 justify-center lg:justify-start lg:order-1">
              <div className="px-3 min-w-56">
                <DatePickerValue />
              </div>
            </div>
            <div className="flex items-center order-6">
              <p className="text-gray-600 px-3 min-w-40">Confirm Password :</p>
              <input
                type="password"
                id="floating_outlined4"
                className="block px-2.5 py-2  w-full text-sm border-2 disabled:bg-slate-200 text-pink-700 bg-gray-100 rounded-lg border-1 border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                placeholder=" "
                disabled={!newPassword || loadingLogout || loadingConfirm}
                onChange={(e) => {
                  setConfirmassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex m-2 mb-4 mt-0 gap-10">
            <div className="flex w-full items-center">
              <p className="text-gray-600 px-3 min-w-40">Address :</p>
              <input
                type="text"
                id="floating_outlined5"
                className="block px-2.5 py-2 disabled:bg-slate-400 w-full min-w-32 text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                placeholder=" "
                disabled={loadingLogout || loadingConfirm}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              disabled={loadingLogout || loadingConfirm}
              onClick={handleSubmit}
              className="bg-pink-200 btn border-none justify-self-center font-bold hover:bg-pink-300 disabled:bg-pink-500 disabled:text-white active:bg-pink-400 transition duration-300 col-span-2 text-gray-700 w-24  px-5 rounded-xl"
            >
              {loadingConfirm ? <LoaderDots /> : "Confirm"}
            </button>
          </div>
        </div>
        <button
          onClick={handleLogout}
          disabled={loadingLogout || loadingConfirm}
          className="bg-red-400 btn border-none h-10 justify-self-center font-bold disabled:text-white disabled:bg-red-300  active:bg-red-600 col-span-2  w-24  hover:bg-red-500 transition-all text-white rounded-xl"
        >
          {loadingLogout ? <LoaderDots /> : "Log out"}
        </button>
      </form>
    </div>
  );
}

export default DashSettings;
