import orders from "../../images/orders.png";
import wallet from "../../images/wallet.png";
import favorites from "../../images/favorites.png";
import support from "../../images/support.png";

function DashPanel() {

  return (
    <div className="grid  gap-x-20 gap-y-24 grid-cols-2">
      <div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={orders} className="absolute  -translate-x-40 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Orders</p>
          <p className="text-gray-700 font-bold">Active orders</p>
        </div>
      </div>
      <div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={wallet} className="absolute  -translate-x-36 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Transaction</p>
          <p className="text-gray-700 font-bold">Bank transactions</p>
        </div>
      </div>
      <div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={favorites} className="absolute  -translate-x-36 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Favorites</p>
          <p className="text-gray-700 font-bold">Favorites to order</p>
        </div>
      </div>
      <div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={support} className="absolute  -translate-x-36 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Active</p>
          <p className="text-gray-700 font-bold">Support tickets</p>
        </div>
      </div>
    </div>
  );
}

export default DashPanel;
