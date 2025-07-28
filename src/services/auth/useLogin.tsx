// useSignUp.ts
import { useMutation } from "@tanstack/react-query";
import type { signUpData } from "@/types/userType";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { Error } from "@/types/errorType";

async function login(userData: signUpData) {
  const res = await fetch("http://localhost:4000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return await res.json();
}

function useSignUp() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success(`Welcome to the tournament, ${data.username}!`);
      navigate("/dashboard");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Login failed. Please try again.");
      if (error.statusCode === 401) navigate("/auth/activation");
      if (error.statusCode === 404) navigate("/auth/signUp");
    },
  });
}

export default useSignUp;
