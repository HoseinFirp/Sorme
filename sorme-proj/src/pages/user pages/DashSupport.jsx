import FormOpinions from "../../Tools/FormOpinions";
import TableSupport from "../../Tools/TableSupport";

function DashSupport() {
  return (
    <div className="flex gap-5 scale-50 md:scale-50 lg:scale-75 xl:scale-100 mx-10 bg-pink-300 bg-opacity-20 p-10 rounded-xl">
      <div className="flex rounded-xl gap-5 p-5 pt-3 items-center min-w-72 flex-col bg-white">
        <p className="text-pink-300">Support Ticket</p>
        <FormOpinions/>
      </div>
      <div className="flex flex-col justify-around h-max gap-10">
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
