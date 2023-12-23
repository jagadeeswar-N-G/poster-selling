import { PRODUCT_CATOGORIES } from "@/config";

import React from 'react'
import ItemsListing from "./ItemsListing";

const ProductListing = () => {
  return (
    <div>
        {PRODUCT_CATOGORIES.map((category: any, key: any)=>(
          <div key={key}>
           <ItemsListing category={category}/>
          </div>
        ))}
    </div>
  )
}

export default ProductListing
  