import { PRODUCT_CATOGORIES } from "@/config";

import React from 'react'
import ItemsListing from "./ItemsListing";

const ProductListing = () => {
  return (
    <div>
        {PRODUCT_CATOGORIES.map((category: any, key: any)=>(
          <ItemsListing category={category}/>
        ))}
    </div>
  )
}

export default ProductListing
  