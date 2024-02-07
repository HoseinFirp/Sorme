import userWhitenew from "../../images/userWhitenew.png";
import sormenew from "../../images/sormenew.png";

function ForgotComp() {
  return (
    <div className="h-screen flex items-center justify-center bg-pink-100">
      <form>
        <div className="flex glass flex-col rounded-2xl bg-pink-500 gap-3 items-center ">
          <div className="flex items-center mt-5 gap-10 justify-between">
            <p className="text-white text-xl font-bold">Forgot Password</p>
            <img src={sormenew} className="w-24 " />
          </div>
          <div className="flex gap-2 items-center flex-col">
            <p className="text-white text-sm my-3">Enter your username to recover your password</p>
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
              <input
                  type="text"
                  id="floating_outlined"
                  className="block  px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  autoFocus

                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Username
                </label>
              </div>
              <img src={userWhitenew} className="w-10 -translate-x-full pr-2" />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-white  px-2 mb-5 py-3 w-full mx-10 rounded-lg font-bold text-pink-500"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotComp;
