import FormOpinions from "../../Tools/FormOpinions";
import TableSupport from "../../Tools/TableSupport";

function DashSupport() {
  return (
    <div className="flex gap-2 bg-pink-300 bg-opacity-20 p-10 rounded-xl">
      <div className="flex rounded-xl gap-5 p-5 pt-3 items-center  flex-col bg-white">
        <p className="text-pink-300">Support Ticket</p>
        <FormOpinions/>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex h-16 items-center px-10 rounded-lg bg-white justify-between">
          <p className="text-pink-300 font-bold ">Active Ticket</p>
          <p className="text-pink-300 font-bold ">10</p>
        </div>
        <div>
          <TableSupport />
        </div>
      </div>
    </div>
  );
}

export default DashSupport;
