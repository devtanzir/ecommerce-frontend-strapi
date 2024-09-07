import Link from "next/link";
import Logo from "../icons/shopLogo";
import { NavItem } from "@/constants/header";
import { createId } from "@/utils/utils";
import CartHeader from "./cart-header";

const Navbar = () => {
    return (
        <>
         <nav className="bg-white  antialiased">
  <div className="container px-4 mx-auto 2xl:px-0 py-4">
    <div className="flex items-center justify-between">

      <div className="flex items-center space-x-8">
        <div className="shrink-0">
          <Link href="/" title="ShopBD" className="flex items-center">
            <Logo/>
          <span className="ml-3 text-xl font-medium hidden md:block">ShopBD</span>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
        {
              NavItem.map(item => (
                <li>
                <Link key={createId()} href={item.path} className="flex text-sm font-medium text-gray-900 transition hover:underline">{item.title}</Link>
                </li>
              ))
            }
        </ul>
      </div>

      <div className="flex items-center lg:space-x-2">
        <CartHeader/>

        <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100  text-sm font-medium leading-none text-gray-900 ">
          <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>              
          Account
          <svg className="w-4 h-4 text-gray-900  ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg> 
        </button>

        <div id="userDropdown1" className="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow  ">
          <ul className="p-2 text-start text-sm font-medium text-gray-900 ">
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "> My Account </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "> My Orders </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "> Settings </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "> Favourites </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "> Delivery Addresses </a></li>
            <li><a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "> Billing Data </a></li>
          </ul>
      
          <div className="p-2 text-sm font-medium text-gray-900 ">
            <a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "> Sign Out </a>
          </div>
        </div>

        <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md  p-2 text-gray-900 ">
          <span className="sr-only">
            Open Menu
          </span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>                
        </button>
      </div>
    </div>

    <div id="ecommerce-navbar-menu-1" className="bg-gray-50 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4">
      <ul className="text-gray-900  text-sm font-medium  space-y-3">
        <li>
          <a href="#" className="hover:text-primary-700 ">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 ">Best Sellers</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 ">Gift Ideas</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 ">Games</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 ">Electronics</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 ">Home & Garden</a>
        </li>
      </ul>
    </div>
  </div>
</nav>   
        </>
    );
};

export default Navbar;