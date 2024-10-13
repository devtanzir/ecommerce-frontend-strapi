import useToggler from "@/hooks/toggler";
import { getData } from "@/lib/getData";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState, useCallback } from "react";

const useCustomer = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const { user, isLoaded } = useUser(); // Include `isLoaded` to check user state
  const { open, handleToggle } = useToggler();

  // Function to fetch customer information (memoized with useCallback)
  const fetchCustomerInfo = useCallback(async () => {
    try {
      const data = await getData({
        url: `${process.env.NEXT_PUBLIC_ROOT_LINK}/api/customers?filters[email][$eq]=${user?.primaryEmailAddress?.emailAddress}&populate=*`,
      });
      setUserInfo(data.data);
    } catch (error) {
      console.error("Failed to fetch customer info", error);
    }
  }, [user]);

  // useEffect to fetch data when the user is fully loaded
  useEffect(() => {
    if (isLoaded && user) {
      fetchCustomerInfo();
    } else {
      console.log("User not loaded or not authenticated");
    }
  }, [isLoaded, user, open, fetchCustomerInfo]);

  return { userInfo, user, updateDone: handleToggle };
};

export default useCustomer;
