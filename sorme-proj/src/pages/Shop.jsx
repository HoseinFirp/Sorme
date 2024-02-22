import { useNavigate } from "react-router-dom";
import womanface from "../images/womanface.png";
import womanhand from "../images/womanhand.png";
import womaneye from "../images/womaneye.png";
import womanhair from "../images/womanhair.png";
import womanlips from "../images/womanlips.png";
import womanbody from "../images/womanbody.png";
import powder1 from "../images/powder1.png";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ErrorAlert from "../Tools/alerts/ErrorAlert";
import { UserContext } from "../App";
import { useUser } from "../Slicers/userSlice";
import SuccessAlert from "../Tools/alerts/SuccessAlert";

function Shop() {
  const navigate = useNavigate();
  const { path } = useContext(UserContext);
  const user = useUser();
  const [showError, setShowError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortModel, setSortModel] = useState([]);
  const [panel, setPanel] = useState("Best");
  const [flag, setFlag] = useState(false);

  const reqDelete = async (_id) => {
    setShowError(false);

    setShowAlert(false);
    try {
      const { data } = await axios.delete(
        `https://keykavoos-sorme.liara.run/${
          path === "admin" ? "Admin" : "seller"
        }/deleteProduct/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setProducts(data);
      setShowAlert(data.message);
      setFlag(true);
    } catch (error) {
      setShowError(error.response.data.messages);
    }
  };

  useEffect(() => {
    const req = async () => {
      setShowError(false);
      try {
        const { data } = await axios.get(
          `https://keykavoos-sorme.liara.run/Product/all_Product`
        );
        setProducts(data);
        setFlag(false);
      } catch (error) {
        setShowError(error.response.data.messages);
      }
    };
    req();
  }, [flag]);

  const handleSortAZ = () => {
    const sortedData = [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortModel(sortedData);
  };

  const handleSortZA = () => {
    const sortedData = [...products].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setSortModel(sortedData);
  };
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
            <a>All products</a>
          </li>
        </ul>
      </div>
      {showError ? <ErrorAlert props={`${showError}`} /> : null}
      {showAlert ? <SuccessAlert props={`${showAlert}`} /> : null}

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
        <button
          onClick={() => {
            setPanel("Best");
            setSortModel(products.sort((a, b) => b.ratings - a.ratings));
          }}
          className={`${
            panel === "Best"
              ? "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-custom-bg-pink justify-self-center btn border-none  text-custom-white rounded-lg"
              : "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg"
          } `}
        >
          Best selling
        </button>
        <button
          onClick={() => {
            setPanel("Most");
            setSortModel(products.sort((a, b) => b.price - a.price));
          }}
          className={`${
            panel === "Most"
              ? "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-custom-bg-pink justify-self-center btn border-none  text-custom-white rounded-lg"
              : "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg"
          } `}
        >
          Most expensive
        </button>
        <button
          onClick={() => {
            setPanel("Cheapest");
            setSortModel(products.sort((a, b) => a.price - b.price));
          }}
          className={`${
            panel === "Cheapest"
              ? "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-custom-bg-pink justify-self-center btn border-none  text-custom-white rounded-lg"
              : "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg"
          } `}
        >
          Cheapest
        </button>
        <button
          onClick={() => {
            setPanel("A - Z");
            handleSortAZ();
          }}
          className={`${
            panel === "A - Z"
              ? "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-custom-bg-pink justify-self-center btn border-none  text-custom-white rounded-lg"
              : "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg"
          } `}
        >
          Name : A - Z
        </button>
        <button
          onClick={() => {
            setPanel("Z - A");
            handleSortZA();
          }}
          className={`${
            panel === "Z - A"
              ? "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-custom-bg-pink justify-self-center btn border-none  text-custom-white rounded-lg"
              : "min-w-32 sm:min-w-32 md:min-w-40 hover:bg-pink-400 hover:text-white lg:min-w-36 bg-gray-400 bg-opacity-50 btn border-none  justify-self-center   text-gray-600 text-xs lg:text-sm  rounded-lg"
          } `}
        >
          Name : Z - A
        </button>
      </div>
      <div
        id="grid"
        className="grid grid-cols-1 md:grid-cols-2 py-20 mx-16 gap-x-10 gap-y-10 lg:grid-cols-3 justify-items-center "
      >
        {(products ? products : sortModel).map((prod) => (
          <div
            key={prod._id}
            className=" border-2 border-pink-100 shadow-xl rounded-xl flex w-min justify-between"
          >
            <div className="flex justify-between flex-col">
              <img
                src={prod.avatar[0]?.path ? prod.avatar[0].path : powder1}
                onClick={() => navigate(`/shop/product/${prod._id}`)}
                className="  max-h-48 max-w-48 rounded-xl cursor-pointer justify-self-start"
              />
              <div className="flex gap-5 content-center ml-4 justify-between mb-1">
                <p
                  onClick={() => navigate(`/shop/product/${prod._id}`)}
                  className="w-36 cursor-pointer font-bold text-lg text-custom-gray"
                >
                  {prod.name}
                </p>
                <p className="font-bold text-pink-400">${prod.price}</p>
              </div>
              <p className=" flex gap-5 ml-4 justify-between mb-2 text-sm text-custom-gray">
                {prod.description.length > 10
                  ? prod.description.slice(0, 22) + " ..."
                  : prod.description}
              </p>
              <p className="w-36 ml-4 mb-5 text-xs text-custom-gray">
                seller : {prod.username}
              </p>
            </div>

            <div className="flex flex-col justify-between pb-6 pt-4  gap-1 items-center">
              <div className="w-5 flex items-center justify-center h-5">
                {path === "admin" || prod.username === user.username ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      reqDelete(prod._id);
                    }}
                    className="cursor-pointer text-red-500   flex justify-center hover:text-red-700 font-bold text-xl px-2"
                  >
                    X
                  </button>
                ) : null}
              </div>
              <p className="w-20 flex text-sm justify-center ">20 Persons</p>
              {prod.category === "Face" ? (
                <img src={womanface} className="w-9 my-2" />
              ) : prod.category === "Hands" ? (
                <img src={womanhand} className="w-9 my-2" />
              ) : prod.category === "Eyes" ? (
                <img src={womaneye} className="w-9 my-2" />
              ) : prod.category === "Hair" ? (
                <img src={womanhair} className="w-9 my-2" />
              ) : prod.category === "Lips" ? (
                <img src={womanlips} className="w-9 my-2" />
              ) : prod.category === "Body" ? (
                <img src={womanbody} className="w-9 my-2" />
              ) : null}

              <div className="rating flex flex-col-reverse gap-2">
                <input
                  type="radio"
                  disabled
                  name="rating-2"
                  className="mask mask-star-2  cursor-default bg-orange-400"
                />
                <input
                  type="radio"
                  disabled
                  name="rating-2"
                  className="mask mask-star-2 cursor-default bg-orange-400"
                />
                <input
                  type="radio"
                  disabled
                  name="rating-2"
                  className="mask mask-star-2 cursor-default bg-orange-400"
                />
                <input
                  type="radio"
                  disabled
                  name="rating-2"
                  className="mask mask-star-2 cursor-default bg-orange-400"
                />
                <input
                  type="radio"
                  disabled
                  name="rating-2"
                  className="mask mask-star-2 cursor-default bg-orange-400"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
