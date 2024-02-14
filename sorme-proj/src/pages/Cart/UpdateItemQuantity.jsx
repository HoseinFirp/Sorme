import { useDispatch } from 'react-redux';

// import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import { useEffect, useState } from 'react';
import { decreaseItemQuantity, increaseItemQuantity } from '../../Slicers/cartSlice';

function UpdateItemQuantity({ productId, currentQuantity ,countInStock}) {
  const [disabled,setDisabled]=useState(false)
  const dispatch = useDispatch();

  useEffect(()=>{
    if (countInStock===currentQuantity) {
      setDisabled(true)
    }
  },[countInStock,currentQuantity])
  return (
    <div className="flex items-center gap-2 md:gap-3 ">
      <button
        type="round"
        className={`btn rounded-full w-8 h-12  text-xl`}
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </button>
      <span className={`text-sm font-medium `}>{currentQuantity}</span>
      <button
        disabled ={disabled}
        type="round"
        className={`btn rounded-full w-8 h-12 text-xl`}
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
