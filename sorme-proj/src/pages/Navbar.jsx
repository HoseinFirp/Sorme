import NavbarPic from "../images/NavbarPic.png";
import SormeLogo from "../images/SormeLogo.png";
import seller from "../images/seller.png";
import locImg from "../images/locImg.png";
import weblog from "../images/weblog.png";
import chatIcon from "../images/chatIcon.png";
import organization from "../images/organization.png";
import flower from "../images/flower.png";
import gift from "../images/gift.png";
import rightArrow from "../images/rightArrow.png";
import iconCart from "../images/iconCart.png";
import signInPic from "../images/signInPic.png";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="z-50 bg-white fixed pb-1">
      <img src={NavbarPic} className="h-10 z-0 w-full" />
      <div className="absolute flex   justify-between  w-full  top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-custom-green text-lg ml-64 font-bold ">
          70$ Off + Gift{" "}
        </p>
        <button className="bg-custom-cream mr-80 text-custom-white rounded-md text-lg p-4 font-bold  pt-0 pb-0">
          Register Now
        </button>
      </div>
      <div className="ml-10 mr-16 mt-3 flex justify-between  items-center">
        <div className="flex items-center ">
          <img src={SormeLogo} className="scale-75" />

          <form className="flex items-center scale-75">
            <button className=" bg-custom-bg-pink w-7 h-7 items-center text-black rounded-md scale-125 justify-center flex">
              <HiMiniMagnifyingGlass />
            </button>
            <input
              placeholder="Product search and..."
              className="w-64 h-9  -ml-2 p-2 pl-5 text-pink-600 font-semibold rounded-md  outline-none bg-custom-bg-1"
            />
          </form>
        </div>
        <div className="flex gap-2 items-center ">
          <button className="flex gap-1 text-xs border rounded-md border-black p-1 font-bold  items-center">
            <p className="text-black">Seller</p>
            <img src={seller} className="w-5" />
          </button>
          <p className="text-2xl -mt-2">|</p>
          <button className="flex gap-1 text-xs border rounded-md border-black p-1  font-bold items-center">
            <p className="text-black">Sign In / SingUp</p>
            <img src={signInPic} className="w-5" />
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
      <div className="flex justify-between mr-16 mb-5">
        <div className="ml-16 mt-3  flex gap-10">
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className=" m-1">
              <button className="flex items-center text-sm text-black font-bold gap-1">
                Products Categorization
                <img src={rightArrow} className="w-3 mt-1" />
              </button>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content  z-[1] menu p-2 shadow backdrop-blur-md bg-opacity-30 bg-pink-300 text-custom-gray rounded-box w-52 "
            >
              <li>
                <button className=" hover:bg-violet-300 hover:text-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Cosmetic
                </button>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Skin products
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Hair products
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Bathroom products
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Health products
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Appliances
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Cream
                </a>
              </li>
            </ul>
          </div>

          <button className="flex items-center text-sm text-black gap-1">
            Brands
            <img src={flower} className="w-5 " />
          </button>
          <button className="flex items-center text-sm text-black gap-1">
            Organizational
            <img src={organization} className="w-5 " />
          </button>
          <button className="flex items-center text-sm text-black gap-1">
            Counseling
            <img src={chatIcon} className="w-5 " />
          </button>
          <button className="flex items-center text-sm text-black gap-1">
            Gift Card
            <img src={gift} className="w-5 " />
          </button>
          <button className="flex items-center text-sm text-black gap-1">
            Weblog
            <img src={weblog} className="w-5 " />
          </button>
        </div>
        <div className="mt-3">
          <button className="flex items-center text-black text-sm font-bold gap-1">
            Branches Sorme
            <img src={locImg} className="w-5 " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
