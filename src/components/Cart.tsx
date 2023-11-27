"use client";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Cart = () => {
  const cartItems = 0;
  return (
    <Sheet>
      <SheetTrigger className=" flex group -m-2 items-center p-2">
        <ShoppingCartIcon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-500 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 max-w-md">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>cart(o)</SheetTitle>
        </SheetHeader>
        {cartItems > 0 ? (
          <div>
            <div className="flex w-full flex-col pr-6">cart items</div>
            <div className="space-y-4 pr-6">
              <Separator className="my-4" />
              <div className="space-y-1.5 tsxt-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Trasaction fee</span>
                  <span>{formatPrice(1)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total fee</span>
                  <span>{formatPrice(1)}</span>
                </div>
              </div>
            </div>
            <SheetFooter className="mt-3">
              <Link
                href="/cart"
                className={buttonVariants({ className: "w-full mr-4" })}
              >
                continue to checkoutk
              </Link>
            </SheetFooter>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <Image src="/EmtyCart.png" alt="Empty Cart" fill />
            </div>
            <div className="text-md font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
