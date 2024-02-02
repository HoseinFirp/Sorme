function DashSettings() {
  return (
    <div className="flex flex-col items-center gap-5 p-5 rounded-2xl mx-10 bg-pink-100">
      <div className="flex flex-col rounded-2xl bg-white gap-5 ">
        <div className="grid gap-5 m-2 mb-0 grid-cols-2">
          <div className="flex items-center ">
            <p className="px-3 w-56">Add Profile :</p>
            <input
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full max-w-xs bg-pink-100"
            />
          </div>
          <div className="flex items-center ">
            <p className="px-3 w-56">Current Password :</p>
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <div className="flex items-center">
            <p className="px-3 w-56">Full Name :</p>
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <div className="flex items-center">
            <p className="px-3 w-56">New Password :</p>
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 py-2   w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <div className="flex items-center">
            <p className="px-3 w-56">Date of Birth :</p>
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 py-2   w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <div className="flex items-center">
            <p className="px-3 w-56">Confirm Password :</p>
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
        </div>
        <div className="flex m-2 mt-0 gap-10">
          <div className="flex w-full items-center">
            <p className="px-3 w-56">Address :</p>
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
          </div>
          <button className="bg-pink-100 justify-self-center font-bold  col-span-2 text-gray-700 w-24 pt-0 pb-1 px-5 rounded-xl">
            Confirm
          </button>
        </div>
      </div>
      <button className="bg-white justify-self-center font-bold  col-span-2 text-gray-700 w-24 py-2 hover:bg-red-500 transition-all hover:text-white rounded-xl">
        Log out
      </button>
    </div>
  );
}

export default DashSettings;
