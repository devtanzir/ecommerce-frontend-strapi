"use client";
import "./header.css";
import Link from "next/link";
import Logo from "../../../public/icons/shopLogo";
import { NavItem } from "@/constants/header";
import CartHeader from "./cart-header";
import MobileMenu from "./mobile-menu";
import { UserButton, useUser } from "@clerk/nextjs";
import useCheckAuth from "@/hooks/check-auth";

const Navbar = () => {
  const { user } = useUser();
  const login = useCheckAuth();

  return (
    !login && (
      <>
        <nav className="bg-white  antialiased">
          <div className="container px-4 mx-auto 2xl:px-0 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="shrink-0">
                  <Link href="/" title="ShopBD" className="flex items-center">
                    <Logo />
                    <span className="ml-3 text-xl font-medium hidden md:block">
                      ShopBD
                    </span>
                  </Link>
                </div>

                <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                  {NavItem.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className="flex text-sm font-medium text-gray-900 transition hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center lg:space-x-2 gap-2">
                <CartHeader />
                {user ? <UserButton /> : <Link className=" text-center text-black bg-[#9BF6FF] border-0 py-2 px-5 hover:bg-[#84e4ed] rounded text-base" href={"/sign-in"}>Log In</Link>}

                <MobileMenu />
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  );
};

export default Navbar;
