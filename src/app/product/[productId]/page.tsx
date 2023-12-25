import Wrapper from "@/components/Wrapper";
import { PRODUCT_CATOGORIES } from "@/config";
import React, { useContext } from "react";
import Image from "next/image";
import AddTocartButton from "@/components/AddTocartButton";


interface PageProps {
  params: {
    productId: string;
  };
}

const page = ({ params }: PageProps) => {
  const findProductByName = (productName: any) => {
    for (const category of PRODUCT_CATOGORIES) {
      const product = category.featured.find(
        (featuredProduct) => featuredProduct.name === productName
      );
      if (product) {
        // Product found
        return { category, product };
      }
    }
    // Product not found
    return null;
  };


 
  const result = findProductByName(params.productId);
  return (
    <>
      <div className="mt-20">
        <div className="flex justify-center items-center ">
          <div className="flex items-center flex-col md:flex-row md:gap-x-10">
            <div className="">
              <Image
                src={result?.product.imageSrc as string}
                alt="product category image"
                width={300}
                height={400}
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-col mt-10 md:mt-0">
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-gray-300">
                    {result?.product.name.toUpperCase()}
                  </h1>
                  <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Price: {result?.product.price}
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 w-[300px] md:w-[400px] ">
                    {result?.product.description}
                  </p>
                </div>
               <AddTocartButton result={result}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
