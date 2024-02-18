import Slider from "../Tools/Slider";
import rimmel1 from "../images/rimmel1.png";
import rimmel2 from "../images/rimmel2.png";
import rimmel3 from "../images/rimmel3.png";
import rimmel4 from "../images/rimmel4.png";
import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";
import brand6 from "../images/brand6.png";
import brand7 from "../images/brand7.png";
import proddiv1 from "../images/proddiv1.png";
import proddiv2 from "../images/proddiv2.png";
import proddiv3 from "../images/proddiv3.png";
import topBrands from "../images/topBrands.png";
import box1 from "../images/box1.png";
import refund1 from "../images/refund1.png";
import refund2 from "../images/refund2.png";
import refund3 from "../images/refund3.png";
import refund4 from "../images/refund4.png";
import supportPic from "../images/supportPic.png";
import MiniSlider from "../Tools/MiniSlider";
import FormOpinions from "../Tools/FormOpinions";
import CountdownTimer from "../Tools/CountDown";
// import ErrorAlert from "../Tools/alerts/ErrorAlert";
// import SuccessAlert from "../Tools/alerts/SuccessAlert";

function Home() {
  return (
    <div className="bg-white pt-20 lg:pt-5 pl-16 pr-16 pb-20">
      <Slider />
      <div className="grid sm:grid-cols-2 gap-y-10 md:grid-cols-2 lg:grid-cols-4 pt-10  justify-items-center">
        <img src={rimmel1} className="w-72 sm:w-56 lg:w-52" />
        <img src={rimmel2} className="w-72 sm:w-56 lg:w-52" />
        <img src={rimmel3} className="w-72 sm:w-56 lg:w-52" />
        <img src={rimmel4} className="w-72 sm:w-56 lg:w-52" />
      </div>
      <div className="w-full flex items-center justify-center h-72 bg-custom-bg-pink mt-16 rounded-2xl">
        <div className="flex ml-14 flex-col gap-4 items-center">
          <img src={box1} className="w-56" />
          <p className="text-white min-w-32 text-3xl">Daily Off</p>
        </div>
        <p className="text-white -rotate-90 font-bold  ">
          <CountdownTimer initialSeconds={44673} />
        </p>
        <MiniSlider />
      </div>
      <div className="flex justify-center mt-10 items-center gap-2 font-bold">
        <img src={topBrands} className="w-10" />
        <p className="text-black text-xl">Top Brands</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-2 gap-y-10 md:grid-cols-3 lg:grid-cols-7 pt-10  justify-items-center mt-7">
        <img src={brand1} className="w-36" />
        <img src={brand2} className="w-36" />
        <img src={brand3} className="w-36" />
        <img src={brand4} className="w-36" />
        <img src={brand5} className="w-36" />
        <img src={brand6} className="w-36" />
        <img src={brand7} className="w-36" />
      </div>
      <div className="grid md:grid-cols-2 gap-x-5 gap-y-10  lg:grid-cols-3 pt-10  justify-items-center mt-5">
        <div className="flex flex-col w-full ">
          <img src={proddiv1} className=" mt-5 max-h mr-auto ml-auto" />
          <div className="flex flex-col border rounded-b-3xl p-5 gap-2">
            <p className="text-black font-medium">
              The most complete review of Kaman products
            </p>
            <div className="flex justify-between">
              <p>hamid</p>
              <p> 2023/10/15</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full ">
          <img src={proddiv2} className=" mt-5 max-h mr-auto ml-auto" />
          <div className="flex flex-col border rounded-b-3xl p-5 gap-2">
            <p className="text-black font-medium">
              The most complete review of Kaman products
            </p>
            <div className="flex justify-between">
              <p>hamid</p>
              <p> 2023/10/15</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <img src={proddiv3} className=" mt-5 max-h mr-auto ml-auto" />
          <div className="flex flex-col border rounded-b-3xl p-5 gap-2">
            <p className="text-black font-medium">
              The most complete review of Kaman products
            </p>
            <div className="flex justify-between">
              <p>hamid</p>
              <p> 2023/10/15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 grid md:grid-cols-2 gap-x-5 gap-y-10  lg:grid-cols-4 pt-10  justify-items-start">
        <div className="flex items-center gap-3">
          <div className="border border-gray-400 rounded-3xl flex items-center justify-center min-w-16 max-h-16">
            <img src={refund1} className="w-16 p-3" />
          </div>
          <div className="flex flex-col  gap-1 content-center justify-center">
            <p className="text-black font-bold">Money back</p>
            <p className="text-sm">Refund in case of dissatisfaction</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="border border-gray-400 rounded-3xl flex items-center justify-center min-w-16 max-h-16">
            <img src={refund2} className="w-16 p-3" />
          </div>
          <div className="flex flex-col  gap-1 content-center justify-center">
            <p className="text-black font-bold">Send a gift</p>
            <p className="text-sm">Send a gift with a purchase of $50</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="border border-gray-400 rounded-3xl flex items-center justify-center min-w-16 max-h-16">
            <img src={refund3} className="w-16 p-3" />
          </div>
          <div className="flex flex-col  gap-1 content-center justify-center">
            <p className="text-black font-bold">Originality</p>
            <p className="text-sm">All goods are guaranteed to be original</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="border border-gray-400 rounded-3xl flex items-center justify-center min-w-16 max-h-16">
            <img src={refund4} className="w-16 p-3" />
          </div>
          <div className="flex flex-col  gap-1 content-center justify-center">
            <p className="text-black font-bold">Instant delivery</p>
            <p className="text-sm">Immediate delivery under 48 hours</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-20 items-center">
        <div id="1" className="flex basis-1/2 flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-black font-bold text-3xl">Contact support</p>
            <p className="text-black  ">Answer as soon as possible</p>
          </div>
          <div>
            <FormOpinions />
          </div>
        </div>
        <div id="2" className="basis-1/2">
          <img src={supportPic} className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
