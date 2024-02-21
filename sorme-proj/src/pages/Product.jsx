import heart from "../images/heart.png";
import share from "../images/share.png";
import homeIcon from "../images/homeIcon.png";
import checkIcon from "../images/checkIcon.png";
import truckIcon from "../images/truckIcon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ErrorAlert from "../Tools/alerts/ErrorAlert";
import {
  addItem,
  clearCart,
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
  useCart,
} from "../Slicers/cartSlice";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loaction = useLocation();
  const [showError, setShowError] = useState(false);
  const [product, setProduct] = useState([]);
  const [id, setId] = useState("");

  const currentQuantity = useSelector(getCurrentQuantityById(product[0]?._id));
  console.log(currentQuantity);

  const cart = useCart();
  console.log("cart : ", cart);

  useEffect(() => {
    setId(loaction.pathname.slice(14));
  }, [loaction.pathname]);
  console.log(product);

  function handleAdd(e) {
    e.preventDefault();

    const newItem = {
      name: product[0].name,
      price: product[0].price,
      productId: product[0]._id,
      quantity: 1,
      totalPrice: currentQuantity * product[0].price,
    };

    console.log(newItem);
    dispatch(addItem(newItem));
  }

  useEffect(() => {
    const req = async () => {
      setShowError(false);
      // setShowAlert(false);
      try {
        const { data } = await axios.get(
          `https://keykavoos-sorme.liara.run/Product/One_Product/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
        setShowError(error.response.data.messages);
      }
    };
    req();
  }, [id]);

  return (
    <div className="pt-48 bg-white">
      <div className="text-sm pl-16 breadcrumbs bg-white text-gray-600">
        <ul>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate("/shop")}>Store</a>
          </li>
          <li>
            <a>{product[0]?.category}</a>
          </li>
          <li>{product[0]?.name}</li>
        </ul>
      </div>
      {showError ? <ErrorAlert props={`${showError}`} /> : null}

      <div
        id="main"
        className="grid grid-cols-2 gap-y-12 gap-x-10 px-16 py-10 pb-20 bg-white justify-around"
      >
        <div id="left-up-con" className="flex ml-28 gap-5 items-center">
          <div className="flex gap-10  flex-col">
            <img
              src={heart}
              className="min-w-14 h-14 border-none hover:bg-pink-100 active:bg-pink-300 p-2 btn rounded-lg bg-custom-bg-icons"
            />
            <img
              src={share}
              className="min-w-14 h-14 border-none hover:bg-pink-100 active:bg-pink-300 p-2 btn rounded-lg bg-custom-bg-icons"
            />
          </div>
          <img className="rounded-lg" src={product[0]?.avatar[0].path} />
        </div>
        <div
          id="right-up-con"
          className="flex border-pink-200 border bg-custom-bg-footer bg-opacity-25 mr-28 min-w-96 flex-col p-8 justify-between rounded-3xl"
        >
          <div>
            <p className="text-black text-lg font-bold">{product[0]?.name}</p>
            <p className="text-sm mt-1">Product ID : {product[0]?._id}</p>
          </div>
          <p className="max-w-96 text-black">{product[0]?.description}</p>
          <div className="flex gap-2">
            <p className="min-w-28  ">Product rating</p>
            <div className="rating flex gap-1">
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
            <p className="min-w-28  ">20 persons</p>
          </div>
        </div>

        <div
          id="left-down-con"
          className="flex gap-8 ml-28 border-pink-200 border bg-custom-bg-icons flex-col p-8 justify-center  rounded-3xl"
        >
          <div className="flex gap-10 justify-between items-center">
            <p className="line-through font-bold text-4xl text-pink-200">
              {product[0]?.price + 12}$
            </p>
            <p className=" bg-pink-300 rounded-3xl mr-5 text-white flex self-center px-3 ">
              {Math.round((12 / (product[0]?.price + 12)) * 100)}%
            </p>
            <p className="text-4xl font-bold text-pink-400">
              {product[0]?.price}$
            </p>
          </div>

          {currentQuantity > 0 ? (
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-4">
                <button
                  className="bg-pink-300 w-7 h-7 rounded-full flex font-extrabold text-2xl hover:bg-purple-600  active:bg-purple-700 pb-2 transition-all text-white items-center justify-center"
                  onClick={() =>
                    dispatch(
                      decreaseItemQuantity({ productId: product[0]._id })
                    )
                  }
                >
                  -
                </button>
                <span className="font-bold text-xl">{currentQuantity}</span>
                <button
                  className="bg-pink-300 w-7 h-7 rounded-full flex font-extrabold text-2xl hover:bg-purple-600  active:bg-purple-700 pb-2 transition-all text-white items-center justify-center"
                  onClick={() => {
                    dispatch(
                      increaseItemQuantity({ productId: product[0]._id })
                    );
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="text-red-300 hover:text-red-500 transition active:text-red-700 font-bold"
                onClick={() => dispatch(clearCart())}
              >
                {" "}
                Remove{" "}
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                handleAdd(e);
              }}
              className="h-12 btn border-none text-2xl bg-custom-bg-pink hover:bg-pink-400 active:bg-pink-500 justify-self-center   text-custom-white  p-4 pt-0 pb-1 rounded-lg"
            >
              Add to Cart
            </button>
          )}
        </div>
        <div
          id="right-down-con"
          className="flex items-center border-pink-100 border mr-28 bg-custom-bg-icons  p-8 justify-between rounded-3xl"
        >
          <div className="flex gap-3 flex-col">
            <div className="flex justify-start items-center gap-5">
              <img src={homeIcon} className="w-14" />
              <p className="flex gap-2">
                Seller : <p className="font-bold">{product[0]?.username}</p>
              </p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <img src={checkIcon} className="w-14" />
              <p className="flex gap-2">
                Brand : <p className="font-bold">{product[0]?.brand}</p>
              </p>
            </div>
          </div>
          <p className="text-7xl pb-5">|</p>
          <div className="flex items-center gap-5">
            <img src={truckIcon} className="w-14 h-14" />
            <p>
              Free shipping
              <br /> to Toronto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
