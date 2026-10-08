import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import Config from "../config/Config.json"
import Loader from "../common/Loader";



const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [authData, setAuthData] = useState(() => localStorage.getItem("token") || "");
  const [authDeatils, setAuthDeatils] = useState('');
  const [userId, setUserId] = useState('');
  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
      //getDataFromStorage();
  
    }, [authData])

    // const getDataFromStorage = async () => {
    //   let userToken = localStorage.getItem("token");
    //   if (authData === '') {
    //     if (userToken === undefined || userToken === null || userToken === '') {
    //     console.log("No token available please login");
    //   }
    //   else{
    //     setAuthData(userToken)
    //     setUserId(localStorage.getItem("userId"))
    //     setUserDetails(localStorage.getItem("userDetails"))
        
    //   }
    //   }
    //   else{
    //     console.log("Authdata_is_not_null")
    //      setAuthData(userToken)
    //     setUserId(localStorage.getItem("userId"))
    //     setUserDetails(localStorage.getItem("userDetails"))
    //   }
    // }

  const logIn = async (arg) => {
    console.log(arg)
    setIsLoading(true)
    try {
      const response = await axios.post(Config.API_URL + Config.LOGIN_API, arg,
        {
          headers: {
            'Content-Type': 'application/json'
          },

        })
      console.log("Login Response", response)
      const token = response?.data?.data?.token;
      // setUserDetails(response?.data?.data?.name)
      console.log("Token : ", token)
      setAuthData(token);
      localStorage.setItem("token", token);
      localStorage.setItem("userDetails", response?.data?.data?.name);
      setUserDetails(response?.data?.data?.name)
      setIsLoading(false)
      return response

    } catch (error) {

      console.log("Log in context error : ", error.response?.data);
      setIsLoading(false)
      throw error;
    }

  }

  // const resetPassword = async (arg) => {
  //   console.log(arg)
  //   setIsLoading(true)
  //   try {
  //     const response = await axios.post(Config.API_URL + Config.RESET_PASSWORD_API, arg,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //       })
  //     console.log("Reset Password Response", response)
  //     setIsLoading(false)
  //     return response
  //   } catch (error) {
  //     console.log("Reset password context error : ", error.response?.data);
  //     setIsLoading(false)
  //     throw error;
  //   }
  // }

  

  

  




  return (
    <AuthContext.Provider
      value={{
        logIn,
        authData,
        authDeatils,
        userId,
        userDetails,
      }}
    >
      {children}
      <Loader isShowLoading={isLoading} />
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)

  return context
}

// export { AuthContext, useAuth, AuthProvider };
// export default AuthProvider;
export default AuthProvider;
export { useAuth };



