import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "../NavItems";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
       <header className="relative bg-white">
        <Wrapper>
            <div className="border-b border-gray-200 flex">
                {/* <div className="flex h-16 items-center">

                </div> */}
                <div className="">
                    <Link href='/'>
                         <Icons.logo className="h-20 w-20"/>
                    </Link>
                </div>
                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                    <NavItems/>
                </div>
            </div>
        </Wrapper>

       </header>
    </div>
  );
};

export default Navbar;
