import Link from "next/link";
import Logo from "../icons/shopLogo";
import { NavItem } from "@/constants/header";

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 border-t border-slate-400">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900  gap-1"
        >
          <Logo/>
          ShopBD
        </Link>
        <p className="my-6 text-gray-500 ">
        More Choices, Better Prices, Happy Shopping!
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 ">
          {
            NavItem.map(item => (
                <li key={item.title}>
                  <Link href={item.path}  className="mr-4 hover:underline md:mr-6 ">
                    {item.title}
                  </Link>
                </li>
            ))
          }
        </ul>
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2021-2022{" "}
          <Link href="/" className="hover:underline">
            IbneAli™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
