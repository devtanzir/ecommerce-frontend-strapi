"use client";
import useToggler from "@/hooks/toggler";
import { FilterProps } from "@/interfaces/filter";
import ChevronDown from "@/public/icons/chevron-down";
import Close from "@/public/icons/close";
import FilterIcon from "@/public/icons/filter";
import { useState, FC } from "react";


const Filter: FC<FilterProps> = ({ onApplyFilters, categories, brands }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]); // Default price range
  const { handleToggle, open } = useToggler();

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // Handle brand change
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  // Handle price range change
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  // Apply filters on button click
  const applyFilters = () => {
    onApplyFilters({
      categories: selectedCategories,
      brands: selectedBrands,
      priceRange,
    });
  };

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
      {/* Filter Modal */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 flex justify-center items-center backdrop-blur-sm ${
          open ? "block" : "hidden"
        } h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full`}
      >
        <div className="relative h-full w-full max-w-xl md:h-auto">
          <div className="relative rounded-lg bg-white shadow">
            <div className="flex items-start justify-between rounded-t p-4 md:p-5">
              <h3 className="text-lg font-normal text-gray-500">Filters</h3>
              <button
                type="button"
                onClick={handleToggle}
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900"
              >
                <Close className="h-5 w-5" fill="#000" />
              </button>
            </div>
            <div className="px-4 md:px-5">
              <h5 className="text-lg font-medium uppercase text-black">
                Categories
              </h5>
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      category.attributes.title
                    )}
                    onChange={() =>
                      handleCategoryChange(category.attributes.title)
                    }
                  />
                  <span>{category.attributes.title}</span>
                </label>
              ))}
              <h3 className="text-lg font-medium mt-4">Filter by Brands</h3>
              <div className="flex flex-col space-y-2">
                {brands.map((brand) => (
                  <label key={brand.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.attributes.name)}
                      onChange={() => handleBrandChange(brand.attributes.name)}
                    />
                    <span>{brand.attributes.name}</span>
                  </label>
                ))}
              </div>

              <h3 className="text-lg font-medium mt-4">
                Filter by Price Range
              </h3>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    handlePriceChange(Number(e.target.value), priceRange[1])
                  }
                  className="border border-gray-300 rounded-md p-1 w-20"
                  min="0"
                />
                <span>to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    handlePriceChange(priceRange[0], Number(e.target.value))
                  }
                  className="border border-gray-300 rounded-md p-1 w-20"
                  min="0"
                />
              </div>
            </div>
            <button
              onClick={() => {
                applyFilters(), handleToggle();
              }}
              className="m-4 bg-blue-500 text-white p-2 rounded-md px-4
            "
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
