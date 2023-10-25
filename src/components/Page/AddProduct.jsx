import React from 'react'
import AddProduct from '../../Storage/AddProduct'

export default function AddProduct() {
  return (
    <>
        <AddProduct
            title={title}
            setTitle={setTitle}
            price={price}
            setPrice={setPrice}
            handleSubmit={handleSubmit}
        />
    </>
  )
}
