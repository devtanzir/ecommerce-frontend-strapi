"use client";
import ChevronDown from "@/public/icons/chevron-down";
import Close from "@/public/icons/close";
import FilterIcon from "@/public/icons/filter";
import Button from "@/components/shared/button";
import useToggler from "@/hooks/toggler";
import BrandFilter from "./brand-filter";
import AdvanceFilter from "./advance-filter";
const Filter = () => {
  const { handleToggle, open } = useToggler();
  const { handleToggle: handleTabs, open: tabOpen } = useToggler();
  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
      >
        <FilterIcon className="-ms-0.5 me-2 h-4 w-4" />
        Filters
        <ChevronDown className="-me-0.5 ms-2 h-4 w-4" />
      </button>
      {/* <!-- Filter modal --> */}

      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={`fixed left-0 right-0 top-0 z-50 flex justify-center items-center backdrop-blur-sm ${
          open ? "block" : "hidden"
        } h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full`}
      >
        <div className="relative h-full w-full max-w-xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between rounded-t p-4 md:p-5">
              <h3 className="text-lg font-normal text-gray-500 ">Filters</h3>
              <button
                type="button"
                onClick={handleToggle}
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900  "
              >
                <Close className="h-5 w-5" fill="#000" />

                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="px-4 md:px-5">
              <div className="mb-4 border-b border-gray-200 ">
                <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
                  <li className="mr-1">
                    <button
                      onClick={handleTabs}
                      className={`inline-block pb-2 pr-1 text-gray-600  ${
                        !tabOpen && "font-bold text-black"
                      }`}
                    >
                      Brand
                    </button>
                  </li>
                  <li className="mr-1">
                    <button
                      onClick={handleTabs}
                      className={`inline-block px-2 pb-2 hover:border-gray-300 text-gray-600 ${
                        tabOpen && "font-bold text-black"
                      }`}
                    >
                      Advanced Filters
                    </button>
                  </li>
                </ul>
              </div>
              {!tabOpen && (
                <BrandFilter/>
              )}
              {tabOpen && (
               <AdvanceFilter/> 
              )}
            </div>

            {/* <!-- Modal footer --> */}
            <div className="flex items-center space-x-4 rounded-b p-4  md:p-5">
              <Button text="Show results" />
              <button
                type="reset"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 "
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Filter;
