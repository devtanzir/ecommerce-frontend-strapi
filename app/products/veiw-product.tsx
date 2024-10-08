"use client";
import Close from "@/public/icons/close";
import Eye from "@/public/icons/eye";
import useToggler from "@/hooks/toggler";
import { Product } from "@/interfaces/products";

const ViewProduct = ({product} : {product: Product}) => {
  const { handleToggle, open } = useToggler();
  const productImage = product.attributes.image.data.attributes.formats.small
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
          <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white  drop-shadow-2xl sm:w-[500px] ${open ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}  max-h-96 max-w-xl overflow-y-scroll`}>
            <Close onClick={handleToggle} className="mx-auto mr-1 mt-1 w-10 cursor-pointer fill-black"/>
            <div className="flex justify-center items-center flex-col gap-5">
              <div className="h-60 p-5 pt-0">
            <img className={`inline-block ${productImage?.width > productImage?.height ? "w-full" : "h-56"}`} src={productImage?.url} alt="product image" />
              </div>
            <div className="px-5">
                <h4 className="text-lg text-black font-semibold mb-1">{product.attributes.title}</h4>
                <h6 className="text-gray-400 uppercase mb-2">{product?.attributes?.categories?.data[0].attributes.title}</h6>
                <span className="flex gap-2 mb-2 items-center">Color : <span style={{backgroundColor: `${product.attributes.color}`}} className="h-6 w-6 rounded-full inline-block"></span></span>
                
                
                <p className="text-gray-500">{product.attributes.description}</p>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ViewProduct;
