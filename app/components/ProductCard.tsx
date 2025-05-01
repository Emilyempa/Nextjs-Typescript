import React from 'react'
import AddToCart from './AddToCart'


interface ProductCardProps {
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description }) => {
  return (
    <div className="card bg-secondary w-96 shadow-md p-1 m-3">
      <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{ description }</p>
        <AddToCart />
        </div>
    </div>
  )
}

export default ProductCard