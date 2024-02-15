// import { HiUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import SormeLogo from "../images/SormeLogo.png";
import iconCart from "../images/iconCart.png";
import { useUser } from "../Slicers/userSlice";

function DashNavbar() {
  const user = useUser();
  const navigate = useNavigate();
  console.log(user)
  return (
    <div className="h-16 bg-white shadow-black shadow-2xl flex items-center justify-between px-16 pl-20">
      <img
        src={SormeLogo}
        onClick={() => navigate("/")}
        className="cursor-pointer  h-7"
      />
      <div className="flex gap-5 items-center">
        <p>Welcome {user.fullname ? user.fullname : user.username}</p>
        {/* <button className="scale-150 flex gap-1 text-md active:bg-gray-300 bg-custom-bg-1 transition duration-200 hover:bg-gray-200 rounded-full border-black p-1  font-bold items-center">
          <HiUser />
        </button> */}
        <div className="indicator">
          <span className="indicator-item badge badge-secondary w-1 font-bold text-white">
            0
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
      </div>
    </div>
  );
}

export default DashNavbar;
