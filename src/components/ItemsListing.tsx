import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemsListing = ({ category }: any) => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-900 from-orange-300">
          {category.label.toUpperCase()}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {category.featured.map((product: any, key: any) => (
            <Link key={key} href={`/product/${product.name}`}>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  width={300}
                  height={300}
                  src={product.imageSrc}
                  alt="image"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md text-gray-700 dark:text-white">
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </p>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900  dark:text-white">
                  {product.price}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsListing;
