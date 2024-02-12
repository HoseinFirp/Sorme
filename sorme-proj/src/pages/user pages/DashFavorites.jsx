import favpic1 from "../../images/favpic1.png";
import dislike from "../../images/dislike.png";
import view from "../../images/view.png";

function DashFavorites() {
  return (
    <div className="grid grid-cols-1 my-20 mx-10 lg:grid-cols-2 gap-x-5 gap-y-10">
      <div className="flex gap-5  items-center h-44 bg-pink-300 bg-opacity-20 rounded-3xl">
        <img src={favpic1} className="rounded-3xl h-32 ml-6" />
        <p className="w-32">Estee Lauder double wear powder cream </p>
        <div className="flex flex-col mr-3 gap-14 cursor-pointer">
          <button>
            <img
              src={dislike}
              className="bg-white  min-w-12 h-12 p-2 rounded-xl hover:bg-pink-200 active:bg-pink-300"
            />
          </button>
          <button>
            <img
              src={view}
              className="bg-white  h-12 min-w-12 p-2 rounded-xl hover:bg-pink-200 active:bg-pink-300"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-5  items-center h-44 bg-pink-300 bg-opacity-20 rounded-3xl">
        <img src={favpic1} className="rounded-3xl h-32 ml-6" />
        <p className="w-32">Estee Lauder double wear powder cream </p>
        <div className="flex flex-col mr-3 gap-14 cursor-pointer">
          <button>
            <img
              src={dislike}
              className="bg-white  h-12 min-w-12 p-2 rounded-xl hover:bg-pink-200 active:bg-pink-300"
            />
          </button>
          <button>
            <img
              src={view}
              className="bg-white  h-12 min-w-12 p-2 rounded-xl hover:bg-pink-200 active:bg-pink-300"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-5  items-center h-44 bg-pink-300 bg-opacity-20 rounded-3xl">
        <img src={favpic1} className="rounded-3xl h-32 ml-6" />
        <p className="w-32">Estee Lauder double wear powder cream </p>
        <div className="flex flex-col mr-3 gap-14 cursor-pointer">
          <button>
            <img
              src={dislike}
              className="bg-white  h-12 min-w-12 p-2 rounded-xl hover:bg-pink-200 active:bg-pink-300"
            />
          </button>
          <button>
            <img
              src={view}
              className="bg-white  h-12 min-w-12 p-2 rounded-xl hover:bg-pink-200 active:bg-pink-300"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-5  items-center h-44 bg-pink-300 bg-opacity-20 rounded-3xl">
        <img src={favpic1} className="rounded-3xl h-32 ml-6" />
        <p className="w-32">Estee Lauder double wear powder cream </p>
        <div className="flex flex-col mr-3 gap-14 cursor-pointer">
          <button>
            <img
              src={dislike}
              className="bg-white  h-12 min-w-12 p-2 rounded-xl hover:bg-pink-200 active:bg-pink-300"
            />
          </button>
          <button>
            <img
              src={view}
              className="bg-white  h-12 min-w-12 p-2 rounded-xl hover:bg-pink-200 active:bg-pink-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashFavorites;
