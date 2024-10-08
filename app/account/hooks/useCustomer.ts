import { getData } from "@/lib/getData";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const useCustomer = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const { user, isLoaded } = useUser();  // Include `isLoaded` to check user state

  // Function to fetch customer information
  const fetchCustomerInfo = async () => {
    try {
      const data = await getData({
        url: `http://localhost:8080/api/customers?filters[email][$eq]=${user?.primaryEmailAddress?.emailAddress}&populate=*`,
      });
      setUserInfo(data.data);
      // console.log("Fetched Customer Data:", data, "User Email:", user?.primaryEmailAddress?.emailAddress);
    } catch (error) {
      console.error("Failed to fetch customer info", error);
    }
  };

  // useEffect to fetch data when the user is fully loaded
  useEffect(() => {
    if (isLoaded && user) {  // Check `isLoaded` and `user` before making the request
      fetchCustomerInfo();
    } else {
      console.log("User not loaded or not authenticated");
    }
  }, [isLoaded, user]);  // Depend on `isLoaded` and `user` state

  return { userInfo, user };
};

export default useCustomer;
