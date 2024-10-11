import { getData } from "@/lib/getData";
import { postData } from "@/lib/postData";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useCreateUser = () => {
  /**
   * Get the current user from Clerk
   */
  const { user } = useUser();
  /**
   * Set user email's
   */
  const [customer, setCustomer] = useState<string[] | null>(null);
  /**
   * to confirm that our function will be called for one time 
   */
  const [check, setCheck] = useState(true);

  const getCustomer = async () => {
    try {
      if (!process.env.NEXT_PUBLIC_ROOT_LINK) {
        console.error(
          "NEXT_PUBLIC_ROOT_LINK environment variable is not defined."
        );
        return;
      }
   
      // getting all user information from database
      const res = await getData({ url: `${process.env.NEXT_PUBLIC_ROOT_LINK}/api/customers`
 });
      if (res?.data?.length > 0) {
        // if there is any user
        const emails = res.data.map((item: any) => item.attributes.email);
        //set user emails to customer state
        setCustomer(emails);
      }
    } catch (error) {
      console.error("Failed to fetch customers:", error);
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  const userEmail = user?.primaryEmailAddress?.emailAddress || "";

  const createUser = async () => {
    const userData = {
      username: user?.fullName,
      email: userEmail,
    };

    if (!user?.fullName) {
      return;
    }

    if (!process.env.NEXT_PUBLIC_ROOT_LINK) {
      console.error(
        "NEXT_PUBLIC_ROOT_LINK environment variable is not defined."
      );
      return;
    }

    if (customer?.includes(userEmail)) {
      return;
    }

    try {
      // creating a new user in the database with user data
      const response = await postData({
        url: `${process.env.NEXT_PUBLIC_ROOT_LINK}/api/customers`,
        postData: userData,
      });
      toast.success("Account Created Successfully!",{
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
    } catch (error) {
      console.error("Error posting order:", error);
    }
  };
  if (customer && !customer?.includes(userEmail) && check) {
    createUser();
    setCheck(false);
  }
};

export default useCreateUser;
