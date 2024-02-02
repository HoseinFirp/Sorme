import sormenew from "../../images/sormenew.png";
import userWhitenew from "../../images/userWhitenew.png";
import hidenew from "../../images/hidenew.png";
import mail from "../../images/mail.png";

function SignInComp() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <form>
        <div className="flex glass flex-col rounded-2xl bg-pink-500  gap-3 items-center ">
          <div className="flex items-center mt-5 gap-36 justify-between">
            <p className="text-white text-xl font-bold">Login</p>
            <img src={sormenew} className="w-24 " />
          </div>
          <p className="text-white my-3">Enter username and password</p>
          <div className="flex gap-5 flex-col">
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
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:-top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Username
                </label>
              </div>
              <img src={userWhitenew} className="w-10 -translate-x-full pr-2" />
            </div>
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
              <input
                  type="text"
                  id="floating_outlined"
                  className="block  px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  

                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:-top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email Address
                </label>
              </div>
              <img src={mail} className="w-10 -translate-x-full pr-2" />
            </div>
            <div className="flex items-center">
              <div className="relative w-72 ml-10">
              <input
                  type="password"
                  id="floating_outlined"
                  className="block  px-2.5 pb-2.5 pt-4 w-full text-sm border-2  text-pink-700 bg-transparent rounded-lg border-1 border-white  appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  

                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute  text-sm text-white font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-pink-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:-top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
              <img src={hidenew} className="w-10 -translate-x-full pr-2 " />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-white px-2 py-3 w-full mx-10 rounded-lg font-bold text-pink-500"
            >
              Create Your Account
            </button>
          </div>

          <div>
            <p className="text-white mt-2 text-sm ">Already have an account?</p>
            <p className="text-white">
              - - - - - - - - - - - - - - - - - - - - - - - - - -
            </p>
            <button className="text-white text-lg px-3 w-full py-2 pt-3 mb-3 font-bold ">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInComp;
