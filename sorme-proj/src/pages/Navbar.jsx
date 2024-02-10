import NavbarPic from "../images/NavbarPic.png";
import SormeLogo from "../images/SormeLogo.png";
import seller from "../images/seller.png";
// import locImg from "../images/locImg.png";
import weblog from "../images/weblog.png";
import chatIcon from "../images/chatIcon.png";
import organization from "../images/organization.png";
import flower from "../images/flower.png";
import gift from "../images/gift.png";
import rightArrow from "../images/rightArrow.png";
import iconCart from "../images/iconCart.png";
import signInPic from "../images/signInPic.png";
import { HiMiniMagnifyingGlass, HiUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import LocationLoader from "../Tools/Loaders/LocationLoader";
import { useUser } from "../user/userSlice";

function Navbar() {
  const navigate = useNavigate();
  const { path, setPath } = useContext(UserContext);
  const user = useUser();
  // console.log(user);
  // useEffect(() => {
  //   // Retrieve data from localStorage when component mounts
  //   localStorage.setItem('userPath', JSON.stringify(path));
  //   const storedData = localStorage.getItem('userPath');
  //   if (storedData) {
  //     setPath(JSON.parse(storedData));
  //   }
  // }, [setPath,path]);
  return (
    <div className="z-50 w-full bg-white glass bg-opacity-25 fixed pb-1">
      <img src={NavbarPic} className="h-10 z-0 w-full" />
      <div className="absolute flex   justify-between  w-full  top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-custom-green min-w-32 text-lg ml-24 sm:ml-36 md:ml-52 lg:ml-56 xl:ml-64 font-bold ">
          70$ Off + Gift{" "}
        </p>
        <button className="bg-custom-cream min-w-40 mr-20 sm:mr-48 md:mr-60 lg:mr-64 xl:mr-80 hover:bg-amber-700 active:bg-amber-800 transition duration-300  text-custom-white rounded-md text-lg p-4 font-bold  pt-0 pb-0">
          Register Now
        </button>
      </div>
      <div className="ml-5 mr-10 sm:ml-10 sm:mr-16 mt-3 flex justify-between flex-col gap-5 md:flex-row  items-center">
        <div className="flex w-full md:justify-start items-center justify-between ">
          <img
            src={SormeLogo}
            onClick={() => navigate("/")}
            className="cursor-pointer scale-75"
          />

          <div className="flex items-center  scale-75">
            <button className=" bg-custom-bg-pink hover:bg-pink-500 transition duration-300 active:bg-pink-600  w-7 h-7 items-center text-black rounded-md scale-125 justify-center flex">
              <HiMiniMagnifyingGlass />
            </button>
            <input
              type="text"
              placeholder=" Product search ..."
              className="w-52 h-9 lg:w-64 -ml-2 p-2 pl-6 text-pink-600 font-semibold rounded-md  outline-none focus:bg-gray-200 transition duration-300 bg-custom-bg-1"
            />
          </div>
        </div>
        <div className="flex gap-3 md:px-0 px-10 justify-between w-full md:w-min items-center ">
          {!user.token ? (
            <div className="flex gap-3  md:px-0  justify-start w-full md:w-min items-center ">
              <button
                onClick={() => {
                  navigate("/signup-seller");
                  setPath("seller");
                }}
                className="flex gap-1 min-w-16 text-xs hover:text-pink-700  active:bg-pink-100 text-black border rounded-md border-black p-1 font-bold  items-center"
              >
                Seller
                <img src={seller} className="w-5" />
              </button>
              <p className="text-2xl -mt-2">|</p>
              <button
                onClick={() => {
                  navigate("/signup");
                  setPath("user");
                }}
                className="flex min-w-32 justify-between gap-1 text-xs  hover:text-pink-700  active:bg-pink-100 text-black border rounded-md border-black p-1 font-bold  items-center"
              >
                Login / SingUp
                <img src={signInPic} className="w-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/dashboard-panel")}
              className="scale-125 flex gap-1 text-md active:bg-gray-300 bg-custom-bg-1 transition duration-200 hover:bg-gray-200 rounded-full border-black p-1  font-bold items-center"
            >
              <HiUser />
            </button>
          )}
          <p className="text-2xl -mt-2">|</p>

          <div className="indicator">
            <span className="indicator-item badge badge-secondary w-1 font-bold text-white">
              0
            </span>
            <button className="flex gap-1 text-xs min-w-7 bg-custom-bg-1 transition duration-300 hover:bg-gray-300 active:bg-gray-400 rounded-md border-black p-1  font-bold items-center">
              <img src={iconCart} className="w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-10   sm:mx-14 scale-75 sm:scale-100  justify-between items-center   mb-5">
        <div className=" mt-3 ml-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center md:justify-items-center auto-cols-max items-center  gap-3">
          <div className="dropdown md:hidden dropdown-bottom">
            <div tabIndex={0} role="button" className=" m-1 min-w-52">
              <button className="flex items-center min-w-52 text-sm   transition hover:text-pink-700 duration-300 rounded-full px-2  text-black gap-1  font-bold ">
                Categories
                <img src={rightArrow} className="w-3 mt-1" />
              </button>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content  z-[1] menu p-2 shadow backdrop-blur-md bg-opacity-80 bg-pink-300 text-black rounded-box w-52  "
            >
              <li>
                <button className="hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 flex  md:items-center md:text-sm md:hover:bg-pink-100 md:hover:border md:ml-2 md:hover:border-pink-200  md:transition md:hover:text-pink-700 md:duration-300 md:rounded-full md:px-2  md:text-black gap-3">
                  <img src={flower} className="w-5" />
                  Brands
                </button>
              </li>
              <li>
                <button className="hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 flex  md:items-center md:text-sm md:hover:bg-pink-100 md:hover:border md:ml-2 md:hover:border-pink-200  md:transition md:hover:text-pink-700 md:duration-300 md:rounded-full md:px-2  md:text-black gap-3">
                  <img src={organization} className="w-5 " />
                  Organizational
                </button>
              </li>
              <li>
                <button className="hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 flex  md:items-center md:text-sm md:hover:bg-pink-100 md:hover:border md:ml-2 md:hover:border-pink-200  md:transition md:hover:text-pink-700 md:duration-300 md:rounded-full md:px-2  md:text-black gap-3">
                  <img src={chatIcon} className="w-5 " />
                  Counseling
                </button>
              </li>
              <li>
                <button className="hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 flex  md:items-center md:text-sm md:hover:bg-pink-100 md:hover:border md:ml-2 md:hover:border-pink-200  md:transition md:hover:text-pink-700 md:duration-300 md:rounded-full md:px-2  md:text-black gap-3">
                  <img src={gift} className="w-5 " />
                  Gift Card
                </button>
              </li>
              <li>
                <button className="hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 flex  md:items-center md:text-sm md:hover:bg-pink-100 md:hover:border md:ml-2 md:hover:border-pink-200  md:transition md:hover:text-pink-700 md:duration-300 md:rounded-full md:px-2  md:text-black gap-3">
                  <img src={weblog} className="w-5 " />
                  Weblog
                </button>
              </li>
            </ul>
          </div>
          <div className="dropdown   dropdown-bottom">
            <div tabIndex={0} role="button" className=" m-1 min-w-52">
              <button className="flex items-center min-w-52 text-sm justify-start  transition hover:text-pink-700 duration-300 rounded-full px-2  text-black gap-1  font-bold ">
                Products Categorization
                <img src={rightArrow} className="w-3 mt-1" />
              </button>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content  z-[1] menu p-2 shadow backdrop-blur-md bg-opacity-80 bg-pink-300 text-black rounded-box w-52 "
            >
              <li>
                <button
                  onClick={() => navigate("/shop")}
                  className=" hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >
                  All Products
                </button>
              </li>
              <li>
                <button className=" hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Cosmetic
                </button>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Skin products
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Hair products
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Bathroom products
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Health products
                </a>
              </li>
              <li>
                <a className=" hover:bg-violet-300 hover:text-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Appliances
                </a>
              </li>
            </ul>
          </div>

          <button className="hidden lg:ml-7  md:flex items-center text-sm hover:bg-opacity-80 hover:bg-pink-100 hover:border border-transparent border hover:border-pink-200  transition hover:text-pink-700 duration-300 rounded-full px-2  text-black gap-1">
            <img src={flower} className="w-5" />
            Brands
          </button>
          <button className="hidden md:flex w-32 py-1 items-center text-sm hover:bg-opacity-80 hover:bg-pink-100 hover:border border-transparent border hover:border-pink-200  transition hover:text-pink-700 duration-300 rounded-full px-2  text-black gap-1">
            <img src={organization} className="w-5 " />
            Organizational
          </button>
          <button className="hidden md:flex py-1 items-center text-sm hover:bg-opacity-80 hover:bg-pink-100 hover:border border-transparent border hover:border-pink-200  transition hover:text-pink-700 duration-300 rounded-full px-2  text-black gap-1">
            <img src={chatIcon} className="w-5 " />
            Counseling
          </button>
          <button className="hidden md:flex py-1 items-center text-sm hover:bg-opacity-80 hover:bg-pink-100 hover:border border-transparent border hover:border-pink-200  transition hover:text-pink-700 duration-300 rounded-full px-2  text-black gap-1">
            <img src={gift} className="w-5 " />
            Gift Card
          </button>
          <button className="hidden md:flex py-1 items-center text-sm hover:bg-opacity-80 hover:bg-pink-100 hover:border border-transparent border hover:border-pink-200  transition hover:text-pink-700 duration-300 rounded-full px-2  text-black gap-1">
            <img src={weblog} className="w-5 " />
            Weblog
          </button>
        </div>
        <div className="mt-3 min-w-36 flex justify-center">
          <button className="flex items-center transition hover:text-pink-700 duration-300  text-black text-sm font-bold gap-1">
            Branches Sorme
            {/* <img src={locImg} className="w-5 " /> */}
            <LocationLoader />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
