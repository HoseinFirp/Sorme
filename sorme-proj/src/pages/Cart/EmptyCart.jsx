import { useNavigate } from "react-router-dom";

function EmptyCart() {

  const navigate = useNavigate()
  return (
    <div className={`px-4 py-3  h-screen `}>
      <button className={`btn`} onClick={()=>navigate("-1")}>&larr; Go Back</button>

      <p className={`mt-7 font-semibold`}>
        Your cart is still empty.
      </p>
    </div>
  );
}

export default EmptyCart;
