"use client"

import React, { useContext } from "react";
import { AuthContext } from "./authProvider";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const AddTocartButton = ({ result }:any) => {
  const { addItem }: any = useContext(AuthContext);
  const { toast } = useToast()

  const handleAddToCart = (result: any) => {
    addItem({
      name: result.product.name,
      price: result.product.price,
      imageSrc: result.product.imageSrc
    });
    toast({
      description:"product added to cart",
    })
  };
  return(<Button onClick={() => {handleAddToCart(result)} }>Add to Cart</Button>);
};

export default AddTocartButton;
