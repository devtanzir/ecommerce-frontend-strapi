import { getData } from '@/lib/getData';

const useGetUser = async () => {
    try {
        if (!process.env.NEXT_PUBLIC_CUSTOMER) {
          console.error(
            "NEXT_PUBLIC_CUSTOMER environment variable is not defined."
          );
          return;
        }
     
        // getting all user information from database
        const res = await getData({ url: process.env.NEXT_PUBLIC_CUSTOMER });
  
        return res.data
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      }
};

export default useGetUser;