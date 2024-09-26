
import { useEffect, useState } from "react";

const useCheckAuth = () => {

    const [isLogin, setIsLogin] = useState<boolean>()


    useEffect(() => {
     setIsLogin(window.location.href.toString().includes("sign-in" || "sign-up"))
    },[isLogin])

    return isLogin;
 
};

export default useCheckAuth;