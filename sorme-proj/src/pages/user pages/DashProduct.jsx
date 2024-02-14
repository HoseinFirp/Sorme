import { useState } from "react";
import LoaderDots from "../../Tools/Loaders/LoaderDots";
import axios from "axios";
import { useUser } from "../../user/userSlice";
import SuccessAlert from "../../Tools/alerts/SuccessAlert";
import ErrorAlert from "../../Tools/alerts/ErrorAlert";

function DashProduct() {
  const [loadingConfirm, setLoadingConfirm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [avatar, setAvatar] = useState();
  const [productName, setProductName] = useState();
  const [priceProduct, setPriceProduct] = useState();
  const [count, setCount] = useState();
  const [aboutProduct, setAboutProduct] = useState();
  const [category, setCategory] = useState("");
  const [productBrand, setProductBrand] = useState();
  const user = useUser();

  function handleSubmit(e) {
    e.preventDefault();
    req();
  }

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    const currentValue = e.target.value;
    const numericValue = currentValue.replace(/[^0-9]/g, "");
    setPriceProduct(numericValue);
  };

  const handleInputChange2 = (e) => {
    const currentValue = e.target.value;
    const numericValue = currentValue.replace(/[^0-9]/g, "");
    setCount(numericValue);
  };

  const req = async () => {
    setShowAlert(false);
    setShowError(false);
    setLoadingConfirm(true);
    try {
      const { data } = await axios.post(
        `https://keykavoos-sorme.liara.run/Product/Add-Product`,
        {
          name: `${productName}`,
          price: `${priceProduct}`,
          description: `${aboutProduct}`,
          brand: `${productBrand}`,
          Ingredients: "Ingredients",
          category: `${category}`,
          size: `${count}`,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibWFtYWR6IiwiaWF0IjoxNzA3ODE0NDExLCJleHAiOjE3MDc5MDA4MTF9.hhDGwICC-ZmVCWS44my1xPh-wlH7VDxrAO-cwI4sVZ4`,
          },
        }
      );
      console.log(data);
      setLoadingConfirm(false);
      setShowAlert(data.message);
      setProductName("");
      setPriceProduct("");
      setAboutProduct("");
      setProductBrand("");
      setCategory("");
      setCount("");
    } catch (error) {
      setLoadingConfirm(false);

      setShowError(error.response.data.message);
      console.log(error);
    }
    if (avatar) {
      const formData = new FormData();
      formData.append("photo", avatar);
      try {
        const { data } = await axios.put(
          `https://keykavoos-sorme.liara.run/Product/upload-avatar/:_id`,
          formData,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibWFtYWR6IiwiaWF0IjoxNzA3ODE0NDExLCJleHAiOjE3MDc5MDA4MTF9.hhDGwICC-ZmVCWS44my1xPh-wlH7VDxrAO-cwI4sVZ4`,
            },
          }
        );
        console.log(data);
        setLoadingConfirm(false);
        setShowAlert(true);
      } catch (error) {
        setLoadingConfirm(false);

        setShowError(error.response.data.message);
        console.log(error);
      }
    }
  };
  return (
    <form className="my-20">
      {showAlert ? <SuccessAlert props={`${showAlert}`} /> : null}
      {showError ? <ErrorAlert props={`${showError}`} /> : null}

      <div className="flex gap-8 mx-10  flex-col">
        <div className="flex items-center">
          <p className="text-gray-600 px-3 min-w-44">Product Photo </p>
          <input
            onChange={(e) => setAvatar(e.target.files[0])}
            type="file"
            value={avatar}
            className="file-input border-2 border-pink-200 file-input-bordered file-input-secondary w-full max-w-xs bg-pink-100"
          />
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 px-3 min-w-40">Product Name </p>
          <input
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            type="text"
            value={productName}
            id="floating_outlined1"
            className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
          />
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 px-3 min-w-40">About Product </p>
          <input
            onChange={(e) => {
              setAboutProduct(e.target.value);
            }}
            value={aboutProduct}
            type="text"
            id="floating_outlined1"
            className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
          />
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 px-3 min-w-40">Price Product </p>
          <input
            onChange={handleInputChange}
            value={priceProduct}
            type="number"
            id="floating_outlined2"
            className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
          />
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 px-3 min-w-40">Count </p>
          <input
            onChange={handleInputChange2}
            value={count}
            type="number"
            id="floating_outlined10"
            className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 px-3 min-w-40">Category </p>

          <select
            onChange={handleCategory}
            defaultValue={category}
            className="select border-2 text-pink-700 bg-pink-100 select-secondary w-full border-pink-200 max-w-xs"
          >
            <option disabled>Pick your Category</option>
            <option>Eyes</option>
            <option>Face</option>
            <option>Hair</option>
            <option>Lips</option>
            <option>Body</option>
            <option>Hands</option>
          </select>
          {/* <input
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            type="text"
            id="floating_outlined2"
            className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
          /> */}
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 px-3 min-w-40">Product Brand </p>
          <input
            onChange={(e) => {
              setProductBrand(e.target.value);
            }}
            type="text"
            value={productBrand}
            id="floating_outlined3"
            className="block px-2.5 py-2  w-full text-sm border-2  text-pink-700 bg-pink-100 rounded-lg border-1 border-pink-200 appearance-none   focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
          />
        </div>
        <button
          type="submit"
          disabled={loadingConfirm}
          onClick={handleSubmit}
          className="bg-pink-300  self-center btn border-none justify-self-center font-bold hover:bg-pink-400 disabled:bg-pink-500 disabled:text-white active:bg-pink-500 transition duration-300 col-span-2 text-gray-700 w-40  px-5 rounded-xl"
        >
          {loadingConfirm ? <LoaderDots /> : "Create Product"}
        </button>
      </div>
    </form>
  );
}

export default DashProduct;
