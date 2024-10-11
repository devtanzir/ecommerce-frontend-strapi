import { ButtonProps } from "@/interfaces/button";
import { FC } from "react";


const Button:FC<ButtonProps> = ({text, className}) => {
    return (
        <>
              <button className={`text-black bg-[#9BF6FF] border-0 py-2 px-8 focus:outline-none hover:bg-[#84e4ed] rounded text-base ${className}`}>{text}</button>
        </>
    );
};

export default Button;