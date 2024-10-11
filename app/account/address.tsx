import useToggler from "@/hooks/toggler";
import { postData } from "@/lib/postData";
import Close from "@/public/icons/close";
import Plus from "@/public/icons/plus";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

const UserAddress = ({
  userId,
  updateDone,
}: {
  userId: number;
  updateDone: () => void;
}) => {
  const initialData = {
    road: "",
    house: "",
    area: "",
    city: "",
    country: "",
    postalCode: "",
  };
  const { handleToggle, open } = useToggler();
  const [formData, setFormData] = useState({ ...initialData });
  const [loader, setLoader] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    if (
      !formData.road ||
      !formData.house ||
      !formData.area ||
      !formData.city ||
      !formData.country ||
      !formData.postalCode
    ) {
      toast.error("Invalid Credentials"),
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        };
      setLoader(false);
      return;
    }
    if (!userId) {
      console.error("User id is empty or undefined");
      setLoader(false);
      return;
    }

    if (!process.env.NEXT_PUBLIC_ROOT_LINK) {
      console.error(
        "NEXT_PUBLIC_ROOT_LINK environment variable is not defined."
      );
      setLoader(false);
      return;
    }

    const finalData = {
      ...formData,
      customer: userId,
    };

    try {
      const response = await postData({
        url: `${process.env.NEXT_PUBLIC_ROOT_LINK}/api/addresses`,
        postData: finalData,
      });
      toast.success("Address Added!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      updateDone();
    } catch (error) {
      console.error("Error posting order:", error);
    } finally {
      setLoader(false);
    }
    setFormData({ ...initialData });
    handleToggle();
  };
  return (
    <>
      <button
        onClick={handleToggle}
        className={`flex items-center gap-1 text-white text-base py-2 px-5 bg-blue-400 rounded hover:bg-blue-500 transition ${
          open
            ? "opacity-0 invisible duration-300 hidden"
            : "opacity-100 visible duration-300 inline-block"
        }`}
      >
        <span className="w-5 h-5">
          <Plus />
        </span>
        Add Address
      </button>
      <div
        onClick={handleToggle}
        className={`fixed z-[100] flex items-center justify-center ${
          open ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white drop-shadow-2xl sm:w-[500px] ${
            open
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
          >
            <Close
              onClick={handleToggle}
              className="mx-auto mr-0 w-10 cursor-pointer fill-black"
            />
            <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-2">
              <div>
                <input
                  onChange={handleChange}
                  value={formData.road}
                  type="text"
                  placeholder="Road Number"
                  name="road"
                  className="block w-full rounded-lg p-3 outline-none drop-shadow-lg bg-white"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  value={formData.house}
                  type="text"
                  placeholder="House Number"
                  name="house"
                  className="block w-full rounded-lg p-3 outline-none drop-shadow-lg bg-white"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  value={formData.area}
                  type="text"
                  placeholder="Area"
                  name="area"
                  className="block w-full rounded-lg p-3 outline-none drop-shadow-lg bg-white"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  value={formData.city}
                  type="text"
                  placeholder="City"
                  name="city"
                  className="block w-full rounded-lg p-3 outline-none drop-shadow-lg bg-white"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  value={formData.postalCode}
                  type="text"
                  placeholder="Postal Code"
                  name="postalCode"
                  className="block w-full rounded-lg p-3 outline-none drop-shadow-lg bg-white"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  value={formData.country}
                  type="text"
                  placeholder="Country"
                  name="country"
                  className="block w-full rounded-lg p-3 outline-none drop-shadow-lg bg-white"
                />
              </div>
            </div>
            {/* button type will be submit for handling form submission*/}
            <button
              type="submit"
              className="relative py-2.5 px-5 rounded-lg mt-6 bg-cyan-100 drop-shadow-lg hover:bg-cyan-200"
            >
              {loader ? "processing..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
