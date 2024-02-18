import heart from "../images/heart.png";
import share from "../images/share.png";
import homeIcon from "../images/homeIcon.png";
import checkIcon from "../images/checkIcon.png";
import truckIcon from "../images/truckIcon.png";
import powder1 from "../images/powder1.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../Slicers/cartSlice";
import ErrorAlert from "../Tools/alerts/ErrorAlert";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loaction = useLocation();
  const [showError, setShowError] = useState(false);
  const [product, setProduct] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    setId(loaction.pathname.slice(14));
  }, [loaction.pathname]);
  function handleAdd(e) {
    e.preventDefault();
    dispatch(addItem(product));
  }
  // console.log(loaction.pathname.slice(14));
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
            <a>Skin Care</a>
          </li>
          <li>Fix Arcanil powder</li>
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
              className="w-14 h-14 border-none hover:bg-pink-100 active:bg-pink-300 p-2 btn rounded-lg bg-custom-bg-icons"
            />
            <img
              src={share}
              className="w-14 h-14 border-none hover:bg-pink-100 active:bg-pink-300 p-2 btn rounded-lg bg-custom-bg-icons"
            />
          </div>
          <img src={powder1} />
        </div>
        <div
          id="right-up-con"
          className="flex border-pink-200 border bg-custom-bg-footer bg-opacity-25 mr-28 flex-col p-8 justify-between rounded-3xl"
        >
          <div>
            <p className="text-black text-lg font-bold">Matte floral pancake</p>
            <p className="text-sm">Product ID : 654659</p>
          </div>
          <p className="max-w-96 text-black">
            Floral pancake, which is made of natural materials, is soft, very
            light on the skin and does not feel heavy on the skin in any way.
            Also, this pancake does not dry the skin, does not rub on the skin,
            has a high durability and a velvety and natural look. gives to the
            face
          </p>
          <div className="flex gap-5">
            <p className="">Product rating</p>
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
            <p>20 persons</p>
          </div>
        </div>

        <div
          id="left-down-con"
          className="flex gap-8 ml-28 border-pink-200 border bg-custom-bg-icons flex-col p-8 justify-center  rounded-3xl"
        >
          <div className="flex gap-10 justify-between items-center">
            <p className="line-through font-bold text-4xl text-pink-200">
              120$
            </p>
            <p className=" bg-pink-300 rounded-3xl text-white flex self-center px-3 ">
              25%
            </p>
            <p className="text-4xl font-bold text-pink-400">67$</p>
          </div>
          <button
            onClick={handleAdd}
            className="h-12 btn border-none text-2xl bg-custom-bg-pink hover:bg-pink-400 active:bg-pink-500 justify-self-center   text-custom-white  p-4 pt-0 pb-1 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
        <div
          id="right-down-con"
          className="flex items-center border-pink-100 border mr-28 bg-custom-bg-icons  p-8 justify-between rounded-3xl"
        >
          <div className="flex gap-3 flex-col">
            <div className="flex justify-start items-center gap-3">
              <img src={homeIcon} className="w-14" />
              <p>Seller : Sorme</p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <img src={checkIcon} className="w-14" />
              <p>Brand : Follero</p>
            </div>
          </div>
          <p className="text-7xl pb-5">|</p>
          <div className="flex items-center gap-3">
            <img src={truckIcon} className="w-14 h-14" />
            <p>
              Free shipping
              <br /> to New York{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
