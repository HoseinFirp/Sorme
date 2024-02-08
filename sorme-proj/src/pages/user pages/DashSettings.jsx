import DatePickerValue from "../../Tools/DatePickerValue";

function DashSettings() {
  return (
    <div className="flex flex-col items-center gap-5 p-5 rounded-2xl mx-10 bg-pink-100">
      <div className="flex flex-col rounded-2xl pr-2 bg-white gap-5 ">
        <div className="lg:grid gap-5 m-2 mb-0 flex  flex-col lg:grid-cols-2">
          <div className="flex items-center order-3 lg:order-5">
            <p className="text-gray-600 px-3 min-w-40">Add Profile :</p>
            <input
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full max-w-xs bg-pink-100"
            />
          </div>
          <div className="flex items-center order-4 lg:order-2">
            <p className="text-gray-600 px-3 min-w-40">Current Password :</p>
            <input
              type="password"
              id="floating_outlined1"
              className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <div className="flex items-center order-2 lg:order-3">
            <p className="text-gray-600 px-3 min-w-40 ">Full Name :</p>
            <input
              type="text"
              id="floating_outlined2"
              className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <div className="flex items-center order-5 lg:order-4">
            <p className="text-gray-600 px-3 min-w-40">New Password :</p>
            <input
              type="password"
              id="floating_outlined3"
              className="block px-2.5 py-2   w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <div className="flex items-center order-1 justify-center lg:justify-start lg:order-1">
            <div className="px-3 min-w-56">
              <DatePickerValue />
            </div>
          </div>
          <div className="flex items-center order-6">
            <p className="text-gray-600 px-3 min-w-40">Confirm Password :</p>
            <input
              type="password"
              id="floating_outlined4"
              className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
        </div>
        <div className="flex m-2 mb-4 mt-0 gap-10">
          <div className="flex w-full items-center">
            <p className="text-gray-600 px-3 min-w-40">Address :</p>
            <input
              type="text"
              id="floating_outlined5"
              className="block px-2.5 py-2  w-full min-w-32 text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <button className="bg-pink-200 justify-self-center font-bold hover:bg-pink-300 active:bg-pink-400 transition duration-300 col-span-2 text-gray-700 w-24 pt-0 pb-1 px-5 rounded-xl">
            Confirm
          </button>
        </div>
      </div>
      <button className="bg-white justify-self-center font-bold active:bg-red-600 col-span-2 text-gray-700 w-24 py-2 hover:bg-red-500 transition-all hover:text-white rounded-xl">
        Log out
      </button>
    </div>
  );
}

export default DashSettings;
