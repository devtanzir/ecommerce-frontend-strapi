"use client"
import ChevronDown from "@/public/icons/chevron-down";
import SortIcon from "@/public/icons/sort-icon";
import { sortItem } from "@/constants/filter";
import useToggler from "@/hooks/toggler";
import Link from "next/link";

const Sort = () => {
    const {handleToggle,open} = useToggler()
    return (
        <div className="relative">
            <button
            onClick={handleToggle}
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  sm:w-auto"
              >
                <SortIcon className="-ms-0.5 me-2 h-4 w-4"/>
                
                Sort
                <ChevronDown className="-me-0.5 ms-2 h-4 w-4"/>
              </button>
              <div

                className={`z-50 ${open ? "block" : "hidden"} w-40 divide-y divide-gray-100 rounded-lg bg-white shadow absolute right-0 top-12`}
              >
                <ul
                  className="p-2 text-left text-sm font-medium text-gray-500 "
                  aria-labelledby="sortDropdownButton"
                >
                    {
                        sortItem.map(item => (
                            <li key={item.id}>
                    <Link
                      href={item.path}
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900   "
                    >
                      {" "}
                      {item.title}{" "}
                    </Link>
                  </li>
                        ))
                    }
                </ul>
              </div>
        </div>
    );
};

export default Sort;