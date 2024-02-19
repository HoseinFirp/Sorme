import { useNavigate } from "react-router-dom";
import prod1 from "../images/prod1.png";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.png";
import prod4 from "../images/prod4.png";
import prod5 from "../images/prod5.png";

function MiniSlider() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/shop")}
      className="overflow-x-auto rounded-box "
    >
      <div className="carousel h-52 rounded-box  cursor-pointer">
        <div className="carousel-items-wrapper flex">
          <div className="carousel-item flex flex-col w-36 border-r justify-between items-center bg-white">
            <img
              src={prod1}
              alt="product"
              className=" mt-5 max-h-32 mr-auto ml-auto"
            />
            <div className="flex gap-12 items-center mb-5">
              <p className="bg-custom-bg-pink text-custom-white rounded-xl text-sm pr-2 pl-2">
                25%
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-black">60$</p>
                <p className="line-through text-xs">120$</p>
              </div>
            </div>
          </div>

          <div className="carousel-item flex flex-col w-36 border-r justify-between items-center bg-white">
            <img
              src={prod2}
              alt="product"
              className=" mt-5 max-h-32 mr-auto ml-auto"
            />
            <div className="flex gap-12 items-center mb-5">
              <p className="bg-custom-bg-pink text-custom-white rounded-xl text-sm pr-2 pl-2">
                25%
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-black">60$</p>
                <p className="line-through text-xs">120$</p>
              </div>
            </div>
          </div>
          <div className="carousel-item flex flex-col w-36 border-r justify-between items-center bg-white">
            <img
              src={prod3}
              alt="product"
              className=" mt-5 max-h-32 mr-auto ml-auto"
            />
            <div className="flex gap-12 items-center mb-5">
              <p className="bg-custom-bg-pink text-custom-white rounded-xl text-sm pr-2 pl-2">
                25%
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-black">60$</p>
                <p className="line-through text-xs">120$</p>
              </div>
            </div>
          </div>
          <div className="carousel-item flex flex-col w-36 border-r justify-between items-center bg-white">
            <img
              src={prod4}
              alt="product"
              className="mt-5 max-h-32 mr-auto ml-auto"
            />
            <div className="flex gap-12 items-center mb-5">
              <p className="bg-custom-bg-pink text-custom-white rounded-xl text-sm pr-2 pl-2">
                25%
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-black">60$</p>
                <p className="line-through text-xs">120$</p>
              </div>
            </div>
          </div>
          <div className="carousel-item flex flex-col w-36 border-r justify-between items-center bg-white">
            <img
              src={prod5}
              alt="product"
              className=" mt-5 max-h-32 mr-auto ml-auto"
            />
            <div className="flex gap-12 items-center mb-5">
              <p className="bg-custom-bg-pink text-custom-white rounded-xl text-sm pr-2 pl-2">
                25%
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-black">60$</p>
                <p className="line-through text-xs">120$</p>
              </div>
            </div>
          </div>
          <div className="carousel-item flex flex-col w-36 justify-between items-center bg-white">
            <img
              src={prod5}
              alt="product"
              className=" mt-5 max-h-32 mr-auto ml-auto"
            />
            <div className="flex gap-12 items-center mb-5">
              <p className="bg-custom-bg-pink text-custom-white rounded-xl text-sm pr-2 pl-2">
                25%
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-black">60$</p>
                <p className="line-through text-xs">120$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniSlider;
