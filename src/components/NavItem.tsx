import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATOGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type Category = (typeof PRODUCT_CATOGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: Boolean;
  isAnyOpen: boolean;
  setActiveIndex: any;
}

const Navitem = ({ category, handleOpen, isAnyOpen, isOpen, setActiveIndex }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
          className="gap-1.5"
        >
          {category.label}
          <ChevronDown
            className={cn("h-5 w-5 transition-all text-muted-foreground ", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground pl-8",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />

          <div className="relative bg-white">
            <div className="mx-auto px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((item, key) => (
                    <Link href={`/product/${item.name}`}>
                     <button
                     onClick={()=>setActiveIndex()}>
                        <div
                          key={item.name}
                          className="group relative text-base sm:text-sm"
                        >
                          <div className="relative rounded-md group-hover:opacity-75">
                            <Image
                              src={item.imageSrc}
                              alt="product category image"
                              width={200}
                              height={200}
                              className="object-cover object-center"
                            />
                          </div>

                          <span className="mt-6 block font-medium text-gray-900">
                            {item.name}
                          </span>
                          <p className="mt-1" aria-hidden="true">
                            Shop now
                          </p>
                        </div>
                        </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navitem;
