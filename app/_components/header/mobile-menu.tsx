"use client";
import { NavItem } from "@/constants/header";
import useToggler from "@/hooks/toggler";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const MobileMenu = () => {
  const { handleToggle, open } = useToggler();
  return (
    <>
      <div className="relative">
        <button
          onClick={handleToggle}
          className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md  p-2 text-gray-900 "
        >
          <span className="sr-only">Open Menu</span>
          <span className="w-5 h-5">
            <FaBars />
          </span>
        </button>
        <div
          className={`${
            !open && "hidden"
          } absolute right-0 w-[287px] bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 mt-4`}
        >
          <ul className="text-gray-900  text-sm font-medium  space-y-3">
            {NavItem.map((item) => (
              <li key={item.id}>
                <Link href={item.path} className="hover:text-primary-700 ">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
