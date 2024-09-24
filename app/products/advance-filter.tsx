import Star from '@/public/icons/star';
import { colorInput, deliveryInput, weightInput } from '@/constants/filter';

const AdvanceFilter = () => {
    return (
        <>
            <div
                  className="space-y-4"
                  id="advanced-filters"
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="min-price"
                          className="block text-sm font-medium text-gray-900 "
                        >
                          {" "}
                          Min Price{" "}
                        </label>
                        <input
                          id="min-price"
                          name="min-price"
                          type="range"
                          min="0"
                          max="7000"
                          value="300"
                          step="1"
                          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 "
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="max-price"
                          className="block text-sm font-medium text-gray-900 "
                        >
                          {" "}
                          Max Price{" "}
                        </label>
                        <input
                          id="max-price"
                          name="max-price"
                          type="range"
                          min="0"
                          max="7000"
                          value="3500"
                          step="1"
                          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 "
                        />
                      </div>

                      <div className="col-span-2 flex items-center justify-between space-x-2">
                        <input
                          type="number"
                          id="min-price-input"
                          name="min-price-input"
                          value="300"
                          min="0"
                          max="7000"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500      "
                          placeholder=""
                          required
                        />

                        <div className="shrink-0 text-sm font-medium ">to</div>

                        <input
                          type="number"
                          id="max-price-input"
                          name="max-price-input"
                          value="3500"
                          min="0"
                          max="7000"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500     "
                          placeholder=""
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label
                          htmlFor="min-delivery-time"
                          className="block text-sm font-medium text-gray-900 "
                        >
                          {" "}
                          Min Delivery Time (Days){" "}
                        </label>

                        <input
                          id="min-delivery-time"
                          name="min-delivery-time"
                          type="range"
                          min="3"
                          max="50"
                          value="30"
                          step="1"
                          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 "
                        />
                      </div>

                      <input
                        type="number"
                        id="min-delivery-time-input"
                        name="min-delivery-time-input"
                        value="30"
                        min="3"
                        max="50"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500      "
                        placeholder=""
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <h6 className="mb-2 text-sm font-medium text-black ">
                      Condition
                    </h6>

                    <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900   ">
                      <li className="w-full border-r border-gray-200 ">
                        <div className="flex items-center pl-3">
                          <input
                            id="condition-all"
                            type="radio"
                            value=""
                            name="list-radio"
                            defaultChecked
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />
                          <label
                            htmlFor="condition-all"
                            className="ml-2 w-full py-3 text-sm font-medium text-gray-900 "
                          >
                            {" "}
                            All{" "}
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-r border-gray-200 ">
                        <div className="flex items-center pl-3">
                          <input
                            id="condition-new"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />
                          <label
                            htmlFor="condition-new"
                            className="ml-2 w-full py-3 text-sm font-medium text-gray-900 "
                          >
                            {" "}
                            New{" "}
                          </label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center pl-3">
                          <input
                            id="condition-used"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />
                          <label
                            htmlFor="condition-used"
                            className="ml-2 w-full py-3 text-sm font-medium text-gray-900 "
                          >
                            {" "}
                            Used{" "}
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div>
                      <h6 className="mb-2 text-sm font-medium text-black ">
                        Color
                      </h6>
                      <div className="space-y-2">
                        {colorInput.map((item) => (
                          <div key={item.id} className="flex items-center">
                            <input
                              id={item.name}
                              type={item.type}
                              name={item.name}
                              value=""
                              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                            />

                            <label
                              htmlFor={item.name}
                              className="ml-2 flex items-center text-sm font-medium text-gray-900 "
                            >
                              <div
                                className={`mr-2 h-3.5 w-3.5 rounded-full ${item.colorCode}`}
                              ></div>
                              {item.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h6 className="mb-2 text-sm font-medium text-black ">
                        Rating
                      </h6>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="five-stars"
                            type="radio"
                            value=""
                            name="rating"
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />
                          <label
                            htmlFor="five-stars"
                            className="ml-2 flex items-center"
                          >
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="four-stars"
                            type="radio"
                            value=""
                            name="rating"
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />
                          <label
                            htmlFor="four-stars"
                            className="ml-2 flex items-center"
                          >
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-gray-300" />
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="three-stars"
                            type="radio"
                            value=""
                            name="rating"
                            defaultChecked
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />
                          <label
                            htmlFor="three-stars"
                            className="ml-2 flex items-center"
                          >
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-gray-300" />
                            <Star className="h-5 w-5 text-gray-300" />
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="two-stars"
                            type="radio"
                            value=""
                            name="rating"
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />
                          <label
                            htmlFor="two-stars"
                            className="ml-2 flex items-center"
                          >
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-gray-300" />
                            <Star className="h-5 w-5 text-gray-300" />
                            <Star className="h-5 w-5 text-gray-300" />
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="one-star"
                            type="radio"
                            value=""
                            name="rating"
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />
                          <label
                            htmlFor="one-star"
                            className="ml-2 flex items-center"
                          >
                            <Star className="h-5 w-5 text-yellow-400" />
                            <Star className="h-5 w-5 text-gray-300" />
                            <Star className="h-5 w-5 text-gray-300" />
                            <Star className="h-5 w-5 text-gray-300" />
                            <Star className="h-5 w-5 text-gray-300" />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h6 className="mb-2 text-sm font-medium text-black ">
                        Weight
                      </h6>
                     

                      <div className="space-y-2">
                      {
                        weightInput.map(item => (
                            <div className="flex items-center">
                          <input
                            id={item.name}
                            name={item.name}
                            type="checkbox"
                            value=""
                            defaultChecked={item.checked}
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500    "
                          />

                          <label
                            htmlFor={item.name}
                            className="ml-2 text-sm font-medium text-gray-900 "
                          >
                            {" "}
                            {item.title}{" "}
                          </label>
                        </div>
                        ))
                      }
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 className="mb-2 text-sm font-medium text-black ">
                      Delivery type
                    </h6>

                    <ul className="grid grid-cols-2 gap-4">
                        {
                            deliveryInput.map(item => (
                                <li>
                        <input
                          type={item.type}
                          id={item.value}
                          name={item.name}
                          value={item.value}
                          className="peer hidden"
                          defaultChecked
                        />
                        <label
                          htmlFor={item.value}
                          className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600       md:p-5"
                        >
                          <div className="block">
                            <div className="w-full text-lg font-semibold">
                              {item.title}
                            </div>
                            <div className="w-full">Delivery only for {item.title}</div>
                          </div>
                        </label>
                      </li>
                            ))
                        }
                    </ul>
                  </div>
                </div>
        </>
    );
};

export default AdvanceFilter;