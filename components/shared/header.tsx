import Link from "next/link";
import Logo from "../icons/shopLogo";

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo/>
            <span className="ml-3 text-xl">ShopBD</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900">About</Link>
            <Link href={"/products"} className="mr-5 hover:text-gray-900">Products</Link>
            <Link href={"contact"} className="mr-5 hover:text-gray-900">Contact Us</Link>
          </nav>
          
          <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-base">Button</button>
        </div>
      </header>
    );
};

export default Header;