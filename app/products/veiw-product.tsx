"use client";
import Close from "@/public/icons/close";
import Eye from "@/public/icons/eye";
import useToggler from "@/hooks/toggler";

const ViewProduct = ({image} : {image: string}) => {
  const { handleToggle, open } = useToggler();
  return (
    <>
      <button
        type="button"
        title="Quick look"
        onClick={handleToggle}
        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900   "
      >
        <span className="sr-only"> Quick look </span>
        <Eye className={"h-5 w-5"} />
      </button>
      <div onClick={handleToggle} className={`fixed z-[100] flex items-center justify-center ${open ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
          <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white  drop-shadow-2xl sm:w-[500px] ${open ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
            <Close onClick={handleToggle} className="mx-auto mr-1 mt-1 w-10 cursor-pointer fill-black"/>
            <div className="flex justify-center items-center">
            <img src={image} alt="product image" />
            </div>
          </div>
        </div>
    </>
  );
};

export default ViewProduct;
