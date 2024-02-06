function FormOpinions() {
    return (
        <form className="grid  grid-cols-2 gap-x-5 gap-y-3">
              <div className="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-pink-300 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-pink-500 font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-pink-300 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-pink-500 font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div className="relative h-64 col-span-2">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block  break-all px-2.5 pb-2.5 h-full pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-pink-300 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-pink-500 font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Your Message
                </label>
              </div>

              <button className="bg-custom-bg-pink hover:bg-pink-500 transition duration-300 justify-self-center font-bold text-xl col-span-2 text-custom-white w-28 p-7 pt-0 pb-1 rounded-xl">
                Send
              </button>
            </form>
    )
}

export default FormOpinions
