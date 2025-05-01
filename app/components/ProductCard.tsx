import React from 'react'
import AddToCart from './AddToCart'


const ProductCard = () => {
  return (
    <div className="card bg-secondary w-96 shadow-md p-1 m-3">
      <div className="card-body">
      <h2 className="card-title">Product Name</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <AddToCart />
        </div>
    </div>
  )
}

export default ProductCard