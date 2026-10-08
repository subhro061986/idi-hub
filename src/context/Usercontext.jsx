import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import Config from "../config/Config.json";
import axios from "axios";
import Loader from "../common/Loader";
import { useAuth } from "./Authcontext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { authData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    
  }, [authData]);

  const GetAllContacts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(Config.API_URL + Config.GET_CONTACTS_API, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authData,
        },
      });
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      // throw error;
    }
  };

  // const CreateCustomer = async (arg) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post(Config.API_URL + Config.CREATE_CUSTOMER_API, arg, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + authData,
  //       },
  //     });
  //     console.log("Create Customer Response", response);
  //     GetCustomer();
  //     setIsLoading(false);
  //     return response;
  //   } catch (error) {
  //     console.log("Create customer context error : ", error);
  //     setIsLoading(false);
  //     throw error;
  //   }
  // };

  // const GetCustomerById = async (id) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get(Config.API_URL + Config.GET_CUSTOMER_BY_ID_API + "/" + id, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + authData,
  //       },
  //     });
  //     console.log("Get Customer By Id Response", response);
  //     setIsLoading(false);
  //     return response;
  //   } catch (error) {
  //     console.log("Get customer by id context error : ", error);
  //     setIsLoading(false);
  //     throw error;
  //   }
  // };

  const GetAllCustomers= async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_CUSTOMERS_API, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authData,
        },
      });
      
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      // throw error;
    }
  };

  const GetAllOrders= async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_ORDERS_API, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authData,
        },
      });
      
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      // throw error;
    }
  };
  
  const GetAllShipments= async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_SHIPMENTS_API, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authData,
        },
      });
      
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      // throw error;
    }
  };

  const GetAllInvoices= async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(Config.API_URL + Config.GET_ALL_INVOICES_API, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authData,
        },
      });
      
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      // throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        GetAllContacts,
        GetAllCustomers,
        GetAllOrders,
        GetAllShipments,
        GetAllInvoices
      }}
    >
      {children}
      <Loader isShowLoading={isLoading} />
    </UserContext.Provider>
  );
};

function UserProfile() {
  const context = useContext(UserContext);

  return context;
}

// export { UserContext, useUser, UserProvider };
// export default UserProvider;
export default UserProvider;
export { UserProfile };
