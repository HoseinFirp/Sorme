import { HiUser } from "react-icons/hi2";
import SormeLogo from "../images/SormeLogo.png";
import iconCart from "../images/iconCart.png";

function DashNavbar() {
  return (
    <div className="h-16 bg-white shadow-black shadow-2xl flex items-center justify-between px-16 pl-20">
      <img src={SormeLogo} className="h-7" />
      <div className="flex gap-5 items-center">
        <button className="scale-150">
          <HiUser />
        </button>
        <p className="text-2xl -mt-2">|</p>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary w-1 font-bold text-white">
            0
          </span>
          <button className="flex gap-1 text-xs bg-custom-bg-1 rounded-md border-black p-1  font-bold items-center">
            <img src={iconCart} className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashNavbar;
