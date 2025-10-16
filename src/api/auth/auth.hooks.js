import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, resetPassword, sendResetLink, signup } from "./auth.api";
import Cookies from "js-cookie";

export const useSignup = () => {
  const queryClient = useQueryClient();

  const data = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      localStorage.setItem("token", data?.token);
      Cookies.set("token", data?.token);
    }
  })

  return data;
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  const data = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  })

  return data;
};

export const useSendResetLink = () => {
  const queryClient = useQueryClient();

  const data = useMutation({
    mutationFn: sendResetLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  })

  return data;
};

export const useResetPassword = () => {
  const queryClient = useQueryClient();

  const data = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  })

  return data;
};