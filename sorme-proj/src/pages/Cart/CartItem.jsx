// import DeleteItem from "./DeleteItem";
// import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ data }) {
  const { name, quantity, totalPrice, price } = data;
  return (
    <li className="py-3 px-10 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 text-pink-400 font-bold sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm text-gray-700 font-bold">
          ${totalPrice ? totalPrice : price * quantity}
        </p>
      </div>
    </li>
  );
}

export default CartItem;
