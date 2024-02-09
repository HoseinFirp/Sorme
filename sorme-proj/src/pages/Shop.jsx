import { useNavigate } from "react-router-dom";
import powder1 from "../images/powder1.png";
import powder2 from "../images/powder2.png";
import powder3 from "../images/powder3.png";
import powder4 from "../images/powder4.png";
import powder5 from "../images/powder5.png";
import powder6 from "../images/powder6.png";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorAlert from "../Tools/alerts/ErrorAlert";

function Shop() {
  const navigate = useNavigate();

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const req = async () => {
      setShowError(false);
      // setShowAlert(false);
      try {
        const { data } = await axios.get(
          `https://keykavoos-sorme.liara.run/Product/all_Product`
        );
        console.log(data);
      } catch (error) {
        console.log(error);
        setShowError(error.response.data.messages);
      }
    };
    req();
  }, []);

  
  return (
    <div className="bg-white">
      <div className="text-sm ml-16 pt-52 breadcrumbs bg-white text-gray-600">
        <ul>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          <li>
            <a>Store</a>
          </li>
          <li>
            <a>Skin Care</a>
          </li>
        </ul>
      </div>
      {showError ? <ErrorAlert props={`${showError}`} /> : null}

      <div
        id="filter"
        className="bg-gray-300 mt-5  rounded-lg items-center justify-items-center  grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-8 lg:grid-cols-6  lg:grid-rows-1  px-5 py-2 lg:h-18 mx-16"
      >
        <p
          className="text-gray-600 min-w-32 sm:min-w-32 md:min-w-40
         lg:min-w-36  text-center"
        >
          Order By
        </p>
        <button className=" min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-custom-bg-pink justify-self-center btn border-none  text-custom-white rounded-lg">
          Best selling
        </button>
        <button className="min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg">
          Most expensive
        </button>
        <button className="min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg">
          Cheapest
        </button>
        <button className="min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg">
          Name : A to Z
        </button>
        <button className="min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg">
          Name : Z to A
        </button>
      </div>
      <div
        id="grid"
        className="grid grid-cols-1 md:grid-cols-2 py-20 mx-16 gap-x-5 gap-y-10 lg:grid-cols-3 justify-items-center "
      >
        <div className=" border-2 border-pink-100 shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img
              src={powder1}
              className="  max-h-56 rounded-xl justify-self-start"
            />
            <div className="flex gap-5 ml-4 justify-between mb-5">
              <p className="w-36 font-bold text-custom-gray">
                Fix Arcanil powder
              </p>
              <p className="font-bold text-pink-400">60$</p>
            </div>
          </div>

          <div className="flex flex-col justify-between py-8 items-center">
            <p className="w-24 flex justify-center">20 persons</p>
            <div className="rating flex flex-col-reverse gap-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div className=" border-2 border-pink-100 shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img
              src={powder6}
              className="  max-h-56 rounded-xl justify-self-start"
            />
            <div className="flex gap-5 ml-4 justify-between mb-5">
              <p className="w-36 font-bold text-custom-gray">
                Fix Arcanil powder
              </p>
              <p className="font-bold text-pink-400">60$</p>
            </div>
          </div>

          <div className="flex flex-col justify-between py-8 items-center">
            <p className="w-24 flex justify-center">20 persons</p>
            <div className="rating flex flex-col-reverse gap-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div className=" border-2 border-pink-100 shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img
              src={powder2}
              className="  max-h-56 rounded-xl justify-self-start"
            />
            <div className="flex gap-5 ml-4 justify-between mb-5">
              <p className="w-36 font-bold text-custom-gray">
                Fix Arcanil powder
              </p>
              <p className="font-bold text-pink-400">60$</p>
            </div>
          </div>

          <div className="flex flex-col justify-between py-8 items-center">
            <p className="w-24 flex justify-center">20 persons</p>
            <div className="rating flex flex-col-reverse gap-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div className=" border-2 border-pink-100 shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img
              src={powder3}
              className="  max-h-56 rounded-xl justify-self-start"
            />
            <div className="flex gap-5 ml-4 justify-between mb-5">
              <p className="w-36 font-bold text-custom-gray">
                Fix Arcanil powder
              </p>
              <p className="font-bold text-pink-400">60$</p>
            </div>
          </div>

          <div className="flex flex-col justify-between py-8 items-center">
            <p className="w-24 flex justify-center">20 persons</p>
            <div className="rating flex flex-col-reverse gap-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div className=" border-2 border-pink-100 shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img
              src={powder4}
              className="  max-h-56 rounded-xl justify-self-start"
            />
            <div className="flex gap-5 ml-4 justify-between mb-5">
              <p className="w-36 font-bold text-custom-gray">
                Fix Arcanil powder
              </p>
              <p className="font-bold text-pink-400">60$</p>
            </div>
          </div>

          <div className="flex flex-col justify-between py-8 items-center">
            <p className="w-24 flex justify-center">20 persons</p>
            <div className="rating flex flex-col-reverse gap-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div className=" border-2 border-pink-100 shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img
              src={powder5}
              className="  max-h-56 rounded-xl justify-self-start"
            />
            <div className="flex gap-5 ml-4 justify-between mb-5">
              <p className="w-36 font-bold text-custom-gray">
                Fix Arcanil powder
              </p>
              <p className="font-bold text-pink-400">60$</p>
            </div>
          </div>

          <div className="flex flex-col justify-between py-8 items-center">
            <p className="w-24 flex justify-center">20 persons</p>
            <div className="rating flex flex-col-reverse gap-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
