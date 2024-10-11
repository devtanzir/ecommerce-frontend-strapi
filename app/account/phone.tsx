import useToggler from "@/hooks/toggler";
import { putData } from "@/lib/putData";
import { validateBDPhoneNumber } from "@/lib/utils/utils";
import Plus from "@/public/icons/plus";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const PhoneNumber = ({
  userId,
  updateDone,
}: {
  userId: number;
  updateDone: () => void;
}) => {
  const { handleToggle, open } = useToggler();
  const [phone, setPhone] = useState<string | undefined>();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    if (!userId) {
      console.error("User id is empty or undefined");
      return;
    }

    if (!process.env.NEXT_PUBLIC_ROOT_LINK) {
      console.error(
        "NEXT_PUBLIC_ROOT_LINK environment variable is not defined."
      );
      return;
    }

    if (!validateBDPhoneNumber(phone ?? "")) {
      toast.error("Invalid phone number"),
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

    try {
      const response = await putData({
        url: `${process.env.NEXT_PUBLIC_ROOT_LINK}/api/customers/${userId}`,
        updateData: { phone },
      });
      toast.success("Update Successful!", {
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
        Add Number
      </button>
      <div
        className={`${
          !open
            ? "opacity-0 invisible duration-300 hidden"
            : "opacity-100 visible duration-300 inline-block"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              value={phone}
              className="border border-slate-400 rounded pl-1"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-cyan-100 py-1 px-2 rounded text-black"
            >
              {loader ? "processing..." : "Submit"}
            </button>
            <button
              onClick={handleToggle}
              className="bg-red-100 py-1 px-2 rounded text-black"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PhoneNumber;