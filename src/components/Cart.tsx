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
import { useAuth } from "./authProvider";
import RemoveItem from "./RemoveItem";
import CheckoutButton from "./CheckoutButton";

const Cart = () => {
  const { items, getTotalPrice } = useAuth();
  const cartItems = items.length;
  return (
    <Sheet>
      <SheetTrigger className=" flex group -m-2 items-center p-2">
        <ShoppingCartIcon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-500 group-hover:text-gray-800">
          {cartItems}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 max-w-md">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Shopping Bag</SheetTitle>
        </SheetHeader>
        {items?.length !== 0 ? (
          <div className="flex flex-col overflow-hidden h-full">
            <div className="overflow-auto">
              <ul className="flex flex-col w-full">
                {items?.map((item, i) => {
                  const merchandiseUrl = `/product/${item.name}`;
                  return (
                    <li
                      key={i}
                      data-testid="cart-item"
                      className="flex justify-between flex-row items-center gap-5 border-b border-[#2E2E32] px-8 py-6"
                    >
                      <div className="flex flex-row justify-between w-full">
                        <Link
                          className="flex flex-row space-x-4"
                          href={merchandiseUrl}
                        >
                          <div className="relative h-14 w-18 cursor-pointer overflow-hidden bg-white rounded">
                            <Image
                              className="h-24 w-18 object-cover"
                              width={72}
                              height={76}
                              sizes="72px"
                              quality={40}
                              alt={item.name || ""}
                              src={item.imageSrc}
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-center">
                            <span className="text-labels-regular font-medium">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <p
                          className="flex flex-col justify-between space-y-2 text-sm"
                        >{formatPrice(item.price)} </p>
                        <RemoveItem itemId={item.name} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-grow flex-col h-fit justify-between">
              <div className="text-labels-regular text-subtle-light dark:text-subtle-dark border-t border-[#2E2E32] font-medium px-8 py-6">
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
                        <span>{getTotalPrice() + 1}</span>
                      </div>
                    </div>
                  </div>
                  <SheetFooter className="mt-3">
                   <CheckoutButton/>
                  </SheetFooter>
                </div>
              </div>
            </div>
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
