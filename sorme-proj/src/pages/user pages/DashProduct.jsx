function DashProduct() {
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex items-center">
        <p className="text-gray-600 px-3 w-44">Product Photo : </p>
        <input
          type="file"
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs bg-pink-100"
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 w-56">Product Name : </p>
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 w-56">About Product : </p>
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 w-56">Price Product : </p>
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 w-56">Product Discount : </p>
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 px-3 w-56">Product Brand : </p>
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
          placeholder=" "
        />
      </div>
    </div>
  );
}

export default DashProduct;
