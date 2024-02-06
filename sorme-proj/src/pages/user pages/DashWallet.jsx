import TableWallet from "../../Tools/TableWallet";
import increase from "../../images/increase.png";
import decrease from "../../images/decrease.png";
import transfer from "../../images/transfer.png";

function DashWallet() {
  return (
    <div className="flex gap-5 scale-50 md:scale-75 lg:scale-100 bg-pink-300 mx-10 bg-opacity-20 p-5  rounded-xl">
      <div className="flex rounded-xl gap-5 p-5 pt-10 justify-between flex-col bg-white">
        <button className="flex rounded-lg h-max hover:bg-pink-200 transition duration-300 items-center bg-pink-300 bg-opacity-20">
          <img src={increase} className="h-24 p-7" />
          <p className="px-2 min-w-44 justify-self-start flex text-gray-600 font-bold">Inventory <br/>increase</p>
        </button>
        <button className="flex rounded-lg h-max hover:bg-pink-200 transition duration-300 items-center bg-pink-300 bg-opacity-20">
          <img src={transfer} className="h-24 p-7" />
          <p className="px-2 text-gray-600 justify-self-start flex font-bold">Inventory transfer</p>
        </button>
        <button className="flex rounded-lg h-max hover:bg-pink-200 transition duration-300 items-center bg-pink-300 bg-opacity-20">
          <img src={decrease} className="h-24 p-7" />
          <p className="px-2 text-gray-600 justify-self-start flex font-bold">Inventory withdrawal</p>
        </button>
      </div>
      <div className="flex flex-col justify-between gap-0 ">
        <div className="flex h-20 items-center px-10 rounded-lg bg-white justify-between">
          <p className="text-gray-700 ">Balance of money</p>
          <p className="text-gray-700 ">60$</p>
        </div>
        <div>
          <TableWallet />
        </div>
      </div>
    </div>
  );
}

export default DashWallet;
