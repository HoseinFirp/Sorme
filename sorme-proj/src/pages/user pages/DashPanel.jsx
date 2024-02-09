import orders from "../../images/orders.png";
import wallet from "../../images/wallet.png";
import boxSeller from "../../images/boxSeller.png";
import userpink from "../../images/userpink.png";
import favorites from "../../images/favorites.png";
import support from "../../images/support.png";
import { useContext } from "react";
import { UserContext } from "../../App";

function DashPanel() {
  const { path } = useContext(UserContext);

  return (
    <div className="grid mt-20 gap-x-28 gap-y-36 md:grid-cols-1 md:gap-y-16   md:my-20 lg:grid-cols-2">
      {path==="user"?<div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={orders} className="absolute  -translate-x-40 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Orders</p>
          <p className="text-gray-700 font-bold">Active orders</p>
        </div>
      </div>:null}
      {/* for Manager */}
      {path!=="user"&&path!=="seller"?<div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={userpink} className="absolute  -translate-x-36 h-24 -translate-y-1/2 "/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Users</p>
          <p className="text-gray-700 font-bold">Users</p>
        </div>
      </div>:null}
      {path!=="user"?<div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={boxSeller} className="absolute  -translate-x-36 h-24 -translate-y-1/2 "/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Sellers</p>
          <p className="text-gray-700 font-bold">Sellers</p>
        </div>
      </div>:null}
      {path==="user"?<div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={wallet} className="absolute  -translate-x-36 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Transactions</p>
          <p className="text-gray-700 font-bold">Bank transactions</p>
        </div>
      </div>:null}
      {path==="user"?<div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={favorites} className="absolute  -translate-x-36 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Favorites</p>
          <p className="text-gray-700 font-bold">Favorites to order</p>
        </div>
      </div>:null}
      {path!=="user"&&path!=="seller"?<div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={favorites} className="absolute  -translate-x-36 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Transaction</p>
          <p className="text-gray-700 font-bold">Financial Transaction</p>
        </div>
      </div>:null}
      {path!=="seller"?<div className="flex shadow-lg shadow-pink-300 justify-end border-2 border-pink-200 w-48 h-20 border-b-4 relative rounded-xl">
        <img  src={support} className="absolute  -translate-x-36 -translate-y-1/2 -rotate-12"/>
        <div className="flex mr-4 gap-1 justify-center items-end flex-col">
          <p className="text-gray-700 font-bold">20 Actives</p>
          <p className="text-gray-700 font-bold">Support tickets</p>
        </div>
      </div>:null}
    </div>
  );
}

export default DashPanel;
