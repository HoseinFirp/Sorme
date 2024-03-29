// import { HiUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import SormeLogo from "../images/SormeLogo.png";
import iconCart from "../images/iconCart.png";
import { useUser } from "../Slicers/userSlice";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../Slicers/cartSlice";

function DashNavbar() {
  const user = useUser();
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const [nameInNavbar, setNameInNavbar] = useState();
  const { path } = useContext(UserContext);

  useEffect(() => {
    setNameInNavbar(user.fullname ? user.fullname : user.username);
  }, [user.fullname, user.username]);
  const navigate = useNavigate();
  return (
    <div className="h-16 bg-white shadow-black shadow-2xl flex items-center justify-between px-16 pl-20">
      <img
        src={SormeLogo}
        onClick={() => navigate("/")}
        className="cursor-pointer  h-7"
      />
      <div className="flex gap-5 items-center">
        <p>Welcome {nameInNavbar}</p>
        {path === "user" && (
          <div className="indicator">
            <span className="indicator-item badge badge-secondary w-1 font-bold text-white">
              {totalCartQuantity}
            </span>
            <button
              onClick={() => {
                navigate("/cart");
              }}
              className="flex gap-1  bg-custom-bg-1 transition duration-300 hover:bg-gray-300 active:bg-gray-400 rounded-md border-black p-2  font-bold items-center"
            >
              <img src={iconCart} className="w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashNavbar;
