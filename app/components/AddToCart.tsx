'use client'
import React from "react";

const AddToCart = () => {
  return (
    <div className="card-actions justify-end">
      <button className='btn btn-primary shadow-lg' onClick={() => console.log("Hello")}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
