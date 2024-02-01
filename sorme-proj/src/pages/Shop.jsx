import powder1 from "../images/powder1.png";
import powder2 from "../images/powder2.png";
import powder3 from "../images/powder3.png";
import powder4 from "../images/powder4.png";
import powder5 from "../images/powder5.png";
import powder6 from "../images/powder6.png";

function Shop() {
  return (
    <div className="bg-white">
      <div className="text-sm ml-16 breadcrumbs bg-white text-gray-600">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Store</a>
          </li>
          <li>
            <a>Skin Care</a>
          </li>
        </ul>
      </div>

      <div
        id="filter"
        className="bg-gray-300 mt-5 rounded-lg justify-start items-center flex gap-4  h-14 mx-16"
      >
        <p className="text-gray-600 px-10 ">Order By</p>
        <button className="h-8 bg-custom-bg-pink justify-self-center   col-span-2 text-custom-white w-28 p-4 pt-0 pb-1 rounded-lg">
          Bestselling
        </button>
        <button className="h-8 bg-gray-400 justify-self-center   col-span-2 text-gray-600 text-sm p-4 pt-0 pb-1 rounded-lg">
          Most expensive
        </button>
        <button className="h-8 bg-gray-400 justify-self-center   col-span-2 text-gray-600 text-sm p-4 pt-0 pb-1 rounded-lg">
          Cheapest
        </button>
        <button className="h-8 bg-gray-400 justify-self-center   col-span-2 text-gray-600 text-sm p-4 pt-0 pb-1 rounded-lg">
          Name : A to Z
        </button>
        <button className="h-8 bg-gray-400 justify-self-center   col-span-2 text-gray-600 text-sm p-4 pt-0 pb-1 rounded-lg">
          Name : Z to A
        </button>
      </div>
      <div
        id="grid"
        className="grid py-20 mx-16 gap-x-5 gap-y-10 grid-cols-3 justify-items-center "
      >
        <div className="border shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img src={powder1} className="  max-h-56 justify-self-start" />
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
        <div className="border shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img src={powder6} className="  max-h-56 justify-self-start" />
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
        <div className="border shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img src={powder2} className="  max-h-56 justify-self-start" />
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
        <div className="border shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img src={powder3} className="  max-h-56 justify-self-start" />
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
        <div className="border shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img src={powder4} className="  max-h-56 justify-self-start" />
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
        <div className="border shadow-xl rounded-xl flex w-min justify-between">
          <div className="flex justify-between flex-col">
            <img src={powder5} className="  max-h-56 justify-self-start" />
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
