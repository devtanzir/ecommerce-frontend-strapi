
import { useEffect, useState } from "react";

const useCheckAuth = () => {

    const [isLogin, setIsLogin] = useState<boolean>()


    useEffect(() => {
     setIsLogin(/sign-up|sign-in/.test(window.location.href))
    },[isLogin])

    return isLogin;
 
};

export default useCheckAuth;