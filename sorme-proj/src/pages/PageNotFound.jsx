import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import notFound from "../images/notFound.png";
function PageNotFound() {
  return (
    <div className="relative ">
      <img src={notFound} className="h-full pt-36 w-full" alt="Background" />

      <p className="absolute mt-36 sm:mt-32 md:text-7xl md:mt-36 text-white text-5xl  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-9xl">
        404
      </p>
      <p className="absolute top-1/3 mt-32 text-md sm:mt-28 md:text-3xl md:mt-36 text-white font-bold left-1/2 transform -translate-x-1/2  lg:text-5xl">
        Page not found!
      </p>
      <form className="absolute top-1/2 mt-24 scale-50 sm:mt-20 sm:scale-75 md:scale-100 md:mt-28   left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
        <button className="bg-custom-bg-pink w-7 h-7 items-center text-black rounded-md scale-125 justify-center flex">
          <HiMiniMagnifyingGlass />
        </button>
        <input
          placeholder="Product search and..."
          className="w-64 h-9 ml-2 p-2 pl-5 text-pink-600 font-semibold rounded-md outline-none bg-custom-bg-1"
        />
      </form>
    </div>
  );
}

export default PageNotFound;
