import { useNavigate } from "react-router-dom";
import { useUser } from "../../Slicers/userSlice";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import LoaderDots from "../../Tools/Loaders/LoaderDots";
import { useEffect, useState } from "react";
import axios from "axios";
import { clearCart, useCart } from "../../Slicers/cartSlice";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";

function Cart() {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);
  const cart = useCart();
  const user = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (user.token) {
      req();
    } else {
      navigate("/login");
    }
  }

  // const cartData = cart?.reduce((arr, c) => {
  //   if (arr.filter((_c) => _c.name === c.name).length) return arr;
  //   return [
  //     ...arr,
  //     {
  //       ...c,
  //       quantity: cart
  //         .filter((i) => i.name === c.name)
  //         .reduce((acc, c) => acc + c.quantity, 0),
  //     },
  //   ];
  // }, []);

  const req = async () => {
    setLoading(true);
    setShowAlert(false)
    try {
      const { data } = await axios.post(
        "https://keykavoos-sorme.liara.run/Order/Submit-Order",
        {
          OrderItems: cart.map((data) => {
            return { productId: data.productId, qty: data.quantity };
          }),
          address: `${user.address}`,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setShowAlert(data)
      setLoading(false);
      dispatch(clearCart())
    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cart[0]) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [cart]);


  return (
    <div className="bg-white pt-56 lg:pt-40 pl-16 pr-16 pb-20">
            {showAlert ? <SuccessAlert props={showAlert} /> : null}

      <h2 className={` mt-7 text-xl font-semibold`}>
        Your cart <span className={`font-extrabold`}>{user?.username}</span> :
      </h2>
      {show ? (
        <p className="mt-10 text-center">Cart is empty!</p>
      ) : (
        <ul className={` mt-3 divide-y divide-stone-200 border-b`}>
          {cart?.map((data) => (
            <CartItem data={data} key={data.productId} />
          ))}
        </ul>
      )}
      <div className=" mt-20 flex justify-start     mr-10">
        <button
          type="submit"
          className="bg-pink-500 btn w-48 disabled:bg-pink-300 disabled:text-white px-5 py-3 active:bg-pink-400 border-none hover:bg-pink-600  mx-10 rounded-lg font-bold text-white"
          onClick={(e) => handleSubmit(e)}
          disabled={show || loading}
        >
          {loading ? <LoaderDots /> : "Complete Your Buy"}
        </button>

        <button
          type="secondary"
          disabled={show || loading}
          className={`btn btn-secondary text-white disabled:bg-red-300 disabled:text-white bg-red-600 hover:bg-red-800 border-none`}
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
