import React from 'react'
import {ApiTopProduct} from '../apifolder/ApiTopProducts'
import Product from '../components/Product'
const Products = () => {
  return (
    <div className='flex flex-wrap  items-center justify-center'>
      {
        ApiTopProduct.map((product,index)=>(
            <Product item={product} key={index}/>
        ))
      }
    </div>
  )
}

export default Products
