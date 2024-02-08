function DashProduct() {
  return (
    <div className="flex gap-8 mx-10 flex-col">
      <div className="flex items-center">
        <p className="text-gray-600 px-3 min-w-44">Product Photo  </p>
        <input
          type="file"
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs bg-pink-100"
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 min-w-40">Product Name  </p>
        <input
          type="text"
          id="floating_outlined1"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 min-w-40">About Product  </p>
        <input
          type="text"
          id="floating_outlined1"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 min-w-40">Price Product  </p>
        <input
          type="text"
          id="floating_outlined2"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 min-w-40">Product Discount  </p>
        <input
          type="text"
          id="floating_outlined2"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 min-w-40">Product Brand  </p>
        <input
          type="text"
          id="floating_outlined3"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
    </div>
  );
}

export default DashProduct;
