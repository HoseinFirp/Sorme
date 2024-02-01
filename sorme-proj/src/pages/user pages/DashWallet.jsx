import TableWallet from "../../Tools/TableWallet";
import increase from "../../images/increase.png";
import decrease from "../../images/decrease.png";
import transfer from "../../images/transfer.png";

function DashWallet() {
  return (
    <div className="flex bg-pink-300 bg-opacity-20 p-10 rounded-xl">
      <div className="flex gap-1 p-5 justify-between flex-col bg-white">
        <button className="flex rounded-lg h-16 items-center bg-pink-300 bg-opacity-20">
          <img src={increase} className="h-24 p-7" />
          <p className="px-2">Inventory increase</p>
        </button>
        <button className="flex rounded-lg h-16 items-center bg-pink-300 bg-opacity-20">
          <img src={transfer} className="h-24 p-7" />
          <p className="px-2">Inventory transfer</p>
        </button>
        <button className="flex rounded-lg h-16 items-center bg-pink-300 bg-opacity-20">
          <img src={decrease} className="h-24 p-7" />
          <p className="px-2">Inventory withdrawal</p>
        </button>
      </div>
      <div>
        <div className="flex justify-between">
          <p>Balance of money</p>
          <p>60$</p>
        </div>
        <div>
          <TableWallet />
        </div>
      </div>
    </div>
  );
}

export default DashWallet;
