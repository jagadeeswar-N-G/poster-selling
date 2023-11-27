import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <Wrapper>
          <div className="border-b border-gray-200 flex">
            {/* <div className="flex h-16 items-center">

                </div> */}
            <div className="">
              <Link href="/">
                <Icons.logo className="h-20 w-20" />
              </Link>
            </div>
            <div className="hidden z-50 md:ml-8 md:block md:self-stretch">
              <NavItems />
            </div>
            <div className="ml-auto flex items-center">
              <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
                {user ? null : (
                  <div>
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Create Account
                    </Link>
                  </div>
                )}
                <div>
                  <Cart/>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;
