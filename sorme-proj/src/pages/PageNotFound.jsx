import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import notFound from "../images/notFound.png";
function PageNotFound() {
  return (
    <div className="relative">
      <img src={notFound} className="h-full w-full" alt="Background" />
      <p className="absolute text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">404</p>
      <p className="absolute top-1/3  text-white font-bold left-1/2 transform -translate-x-1/2  text-5xl">Page not found!</p>
      <form className="absolute top-1/2 scale-125 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
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
