import { filterInput } from "@/constants/filter";

const BrandFilter = () => {
    return (
        <>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {filterInput.map((item) => (
                      <div key={item.id} className="space-y-2">
                        <h5 className="text-lg font-medium uppercase text-black ">
                          {item.group}
                        </h5>
                        {item.inputs.map((item) => (
                          <div key={item.id} className="flex items-center">
                            <input
                              id={item.name}
                              type={item.type}
                              name={item.name}
                              defaultChecked={item.checked}
                              value=""
                              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                            />

                            <label
                              htmlFor={item.name}
                              className="ml-2 text-sm font-medium text-gray-900 "
                            >
                              {" "}
                              {item.title} ({item.qty}){" "}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
        </>
    );
};

export default BrandFilter;