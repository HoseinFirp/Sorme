import { useNavigate } from "react-router-dom";
import { clearCart, useCart } from "../../Slicers/cartSlice";
import { useUser } from "../../Slicers/userSlice";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import LoaderDots from "../../Tools/Loaders/LoaderDots";
import { useState } from "react";
import axios from "axios";

function Cart() {
  const [loading, setLoading] = useState(false);

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
    try {
      const { data } = await axios.post(
        "https://keykavoos-sorme.liara.run/Order/Submit-Order",
        {
          orderItems: [
            { productId: "64254d33735379f41dad936e", qty: 2 },
            { productId: "6362a84eb90ac8bc6100a979", qty: 2 },
          ],
          address: `${user.address}`,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
    }
  };
  console.log(cart);

  return (
    <div className="bg-white pt-56 lg:pt-40 pl-16 pr-16 pb-20">
      <h2 className={` mt-7 text-xl font-semibold`}>
        Your cart <span className={`font-extrabold`}>{user?.username}</span> :
      </h2>
      {!cart ? (
        <p className="mt-10 text-center">Cart is empty!</p>
      ) : (
        <ul className={` mt-3 divide-y divide-stone-200 border-b`}>
          {cart?.map((data) => (
            <CartItem data={data} key={data.productId} />
          ))}
        </ul>
      )}
      <div className=" mt-10 flex justify-between mr-10">
        <button
          type="submit"
          className="bg-pink-400 btn disabled:bg-pink-300 disabled:text-white px-5 py-3 active:bg-pink-300 border-none hover:bg-pink-200  mx-10 rounded-lg font-bold text-pink-500"
          onClick={(e) => handleSubmit(e)}
          disabled={!cart || loading}
        >
          {loading ? <LoaderDots /> : "Complete Your Buy"}
        </button>

        <button
          type="secondary"
          disabled={!cart || loading}
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
