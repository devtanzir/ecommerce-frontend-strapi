"use client";
import { NavItem } from "@/constants/header";
import useToggler from "@/hooks/toggler";
import Link from "next/link";

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
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
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
