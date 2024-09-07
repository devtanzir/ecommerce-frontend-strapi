"use client"
import useToggler from "@/hooks/toggler";
import ChevronDown from "../icons/chevron-down";
import User from "../icons/user";
import { userProfileData } from "@/constants/user-profile";
import Link from "next/link";

const UserProfile = () => {
    const { handleToggle, open } = useToggler();
  return (
    <>
    <div className="relative">
      <button
       onClick={handleToggle}
        className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100  text-sm font-medium leading-none text-gray-900 "
      >
        <User/>
        <span className="hidden sm:flex">
        Account
        </span>
        <ChevronDown className="hidden sm:flex text-gray-900  ms-1" />
      </button>

      <div
        className={`${
            !open && "hidden"
          }  absolute top-[75px] right-0 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow`}
      >
        <ul className="p-2 text-start text-sm font-medium text-gray-900 ">
            {
                userProfileData.map(item => (
                    <li key={item.id}>
            <Link
              href={item.path}
              title={item.name}
              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
            >
              {" "}
              {item.name}{" "}
            </Link>
          </li>
                ))
            }
        </ul>

        <div className="p-2 text-sm font-medium text-gray-900 ">
          <Link
            href="/"
            title="sign out"
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
          >
            {" "}
            Sign Out{" "}
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default UserProfile;
