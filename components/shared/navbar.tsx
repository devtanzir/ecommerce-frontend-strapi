import Link from "next/link";
import Logo from "../icons/shopLogo";
import { NavItem } from "@/constants/header";
import CartHeader from "./cart-header";
import UserProfile from "./userProfile";
import MobileMenu from "./mobile-menu";

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
                <li key={item.id}>
                <Link href={item.path} className="flex text-sm font-medium text-gray-900 transition hover:underline">{item.title}</Link>
                </li>
              ))
            }
        </ul>
      </div>

      <div className="flex items-center lg:space-x-2 gap-2">
        <CartHeader/>
        {/* <Button text="Sign Up" className="px-3"/> */}
        <UserProfile/>

        <MobileMenu/>

      </div>
    </div>

  </div>
</nav>   
        </>
    );
};

export default Navbar;