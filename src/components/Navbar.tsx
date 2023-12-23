"use client"
import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import NavItems from "./NavItems";
import { Button, buttonVariants } from "./ui/button";
import Cart from "./Cart";
import {ModeToggle} from './ThemeModel'
import { AuthContext } from "./authProvider";
import { DropdownMenuDemo } from "./logout";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { isLoggedIn }: any = useContext(AuthContext);
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <Wrapper>
          <div className="border-b border-gray-200 flex">
          <MobileNav/>
            <div className="">
              <Link href="/">
                <Icons.logo className="h-[50px] w-[50px] md:h-20 md:w-20" />
              </Link>
            </div>
            <div className="hidden z-50 md:ml-8 md:block md:self-stretch">
              <NavItems />
            </div>
            <div className="ml-auto flex items-center">
              <div >
                {isLoggedIn ? (
                 <DropdownMenuDemo/>
                ) : (
                  <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
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
              </div>
              <div className="md:pl-4">
                  <Cart/>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;


