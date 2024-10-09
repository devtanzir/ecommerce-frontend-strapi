import useToggler from "@/hooks/toggler";
import { getData } from "@/lib/getData";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const useCustomer = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const { user, isLoaded } = useUser();  // Include `isLoaded`8to check user state
  const {open, handleToggle} = useToggler()

  // Function to fetch customer information
  const fetchCustomerInfo = async () => {
    try {
      const data = await getData({
        url: `http://localhost:8080/api/customers?filters[email][$eq]=${user?.primaryEmailAddress?.emailAddress}&populate=*`,
      });
      setUserInfo(data.data);
    } catch (error) {
      console.error("Failed to fetch customer info", error);
    }
  };

  // useEffect to fetch data when the user is fully loaded
  useEffect(() => {
    if (isLoaded && user) {
      fetchCustomerInfo();
    } else {
      console.log("User not loaded or not authenticated");
    }
  }, [isLoaded, user, open]);

  return { userInfo, user, updateDone:handleToggle };
};

export default useCustomer;
