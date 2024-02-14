import { Link } from "react-router-dom";
import { clearCart, useCart } from "../../Slicers/cartSlice";
import { useUser } from "../../Slicers/userSlice";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";

function Cart() {
  const cart = useCart();
  const user = useUser();
  const dispatch = useDispatch();

  const cartData = cart.reduce((arr, c) => {
    if (arr.filter((_c) => _c.name === c.name).length) return arr;
    return [
      ...arr,
      {
        ...c,
        quantity: cart
          .filter((i) => i.name === c.name)
          .reduce((acc, c) => acc + c.quantity, 0),
      },
    ];
  }, []);

  return (
    <div className="h-screen">
      <h2 className={` mt-7 text-xl font-semibold`}>
        Your cart <span className={`font-extrabold`}>{user?.username}</span> :
      </h2>

      <ul className={` mt-3 divide-y divide-stone-200 border-b`}>
        {cartData.map((data) => (
          <CartItem data={data} key={data.productId} />
        ))}
      </ul>
      <div className="ml-5 mt-10 space-x-2 flex gap-10">
        <Link to={user.token ? "/address" : "/login"}>
          <button type="primary" className={`btn btn-primary `}>
            Complete Your Buy
          </button>
        </Link>

        <button
          type="secondary"
          className={`btn btn-secondary bg-red-600 hover:bg-red-800 border-none`}
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
