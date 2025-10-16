"use client";
import { useLogin } from "@/api/auth/auth.hooks";
import { createContext, useEffect, useReducer, useState } from "react";
import Cookies from "js-cookie";
import { showToaster } from "@/helpers/useToaster";
import { handleErrorMessage } from "@/helpers/handleErrorMessage";
import { useRouter } from "next/navigation";
import request from "@/api/AxiosRequest";

export const AuthContext = createContext(undefined);

const initialState = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
  } || null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [token, setToken] = useState(null);

  const { replace } = useRouter();

  // const [token, setToken] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("token");
  //   }
  //   return null;
  // });

  const { mutateAsync: login, isPending } = useLogin();

  const handleSuccessLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    Cookies.set("token", token);
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await login({ email, password });

      if (!response.success) {
        throw new Error(response.message || "Login failed");
      };

      if (response?.success) {
        handleSuccessLogin(response?.token);
        dispatch({ type: "LOGIN", payload: response?.data });
      }

      return response;
    } catch (error) {
      showToaster("error", handleErrorMessage(error));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    Cookies.remove("token");
    dispatch({ type: "LOGOUT" });
    replace("/login");
  };

  useEffect(() => {
    if (!token) {
      dispatch({ type: "STOP_LOADING" });
      return;
    }

    async function getUserInfo(){
      try {
        const response = await request.get("/auth/my-info");
        console.log("User info fetched successfully:", response);
        if (response?.data?.success) {
          if (!response?.data) {
            return;
          };
          dispatch({ type: "LOGIN", payload: response?.data?.data });
        } else {
          dispatch({ type: "LOGOUT" });
          return replace(`/login`);
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: "LOGOUT" });
      }
    };

    getUserInfo();
  }, [token, replace]);

  const value = {
    ...state,
    login: handleLogin,
    logout: handleLogout,
    isPending,
    token,
    dispatch,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;