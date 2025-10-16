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
  user: null,
  isLoading: true,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [token, setToken] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const { replace } = useRouter();

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

  // Initialize token from storage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setIsInitialized(true);
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);

  // Fetch user info when token changes
  useEffect(() => {
    if (!token) {
      setIsInitialized(true);
      dispatch({ type: "SET_LOADING", payload: false });
      return;
    }

    async function getUserInfo(){
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const response = await request.get("/auth/my-info");
        console.log("User info fetched successfully:", response);
        
        if (response?.data?.success && response?.data?.data) {
          dispatch({ type: "LOGIN", payload: response?.data?.data });
        } else {
          dispatch({ type: "LOGOUT" });
          localStorage.removeItem("token");
          setToken(null);
          Cookies.remove("token");
          replace("/login");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("token");
        setToken(null);
        Cookies.remove("token");
        replace("/login");
      } finally {
        setIsInitialized(true);
      }
    }

    getUserInfo();
  }, [token, replace]);

  // check the role
  const isTutor = state?.user?.role === "tutor";
  const isStudent = state?.user?.role === "student";

  const value = {
    ...state,
    login: handleLogin,
    logout: handleLogout,
    isPending,
    token,
    dispatch,
    isInitialized,
    isTutor,
    isStudent,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;