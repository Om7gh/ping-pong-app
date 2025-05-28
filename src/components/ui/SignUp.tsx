import { useState } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { Logo } from "@assets";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import InputField from "./InputField";
import FileInput from "./FileInput";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const actionData = useActionData() as { errors?: Record<string, string> };
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="w-[700px] bg-gradient-to-b from-slate-800 to-teal-800 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center rounded-3xl relative overflow-hidden">
      <div className="relative max-w-md w-full mt-16 space-y-8 backdrop-blur-sm p-8 rounded-xl border border-teal-400/20 shadow-2xl shadow-teal-400/10">
        <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-24 bg-teal-400 rounded-r-lg" />
        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-24 bg-orange-400 rounded-l-lg" />

        <div className="flex flex-col items-center">
          <img src={Logo} alt="logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">
            Join The Tournament!
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Already a player?{" "}
            <Link
              to="/connection/signin"
              className="font-medium text-teal-400 hover:text-teal-300 underline underline-offset-4">
              Sign in here
            </Link>
          </p>
        </div>

        <Form method="POST" className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <InputField
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Player name"
                className="pl-10 bg-gray-700/50 border-gray-600 focus:ring-teal-400 focus:border-teal-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">👑</span>
              </div>
              {actionData?.errors?.username && (
                <p className="mt-1 text-sm text-red-400">
                  {actionData.errors.username}
                </p>
              )}
            </div>

            <div className="relative">
              <InputField
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Player email"
                className="pl-10 bg-gray-700/50 border-gray-600 focus:ring-teal-400 focus:border-teal-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">✉️</span>
              </div>
              {actionData?.errors?.email && (
                <p className="mt-1 text-sm text-red-400">
                  {actionData.errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <InputField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Secret smash"
                className="pl-10 bg-gray-700/50 border-gray-600 focus:ring-teal-400 focus:border-teal-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔑</span>
              </div>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-teal-400 transition-colors"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
              {actionData?.errors?.password && (
                <p className="mt-1 text-sm text-red-400">
                  {actionData.errors.password}
                </p>
              )}
            </div>

            <div className="relative">
              <InputField
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Confirm secret smash"
                className="pl-10 bg-gray-700/50 border-gray-600 focus:ring-teal-400 focus:border-teal-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔏</span>
              </div>
              {actionData?.errors?.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">
                  {actionData.errors.confirmPassword}
                </p>
              )}
            </div>

            <FileInput
              name="avatar"
              error={actionData?.errors?.avatar}
              accept="image/png, image/jpeg"
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-orange-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-800 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registering...
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="mr-2">🏓</span>
                  Join The Game
                </span>
              )}
            </button>
          </div>
        </Form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 text-sm text-slate-400 bg-gray-800/70">
              Or sign up with
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center justify-center py-2 px-4 border border-gray-600 rounded-lg text-sm font-medium text-slate-300 hover:bg-gray-700/50 transition-colors w-full">
          <span className="mr-2">G</span> Google
        </button>
      </div>
    </div>
  );
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  avatar?: string;
  form?: string;
}

export async function signUpAction({ request }: { request: Request }) {
  const formData = await request.formData();

  // Validate form data
  const errors: FormErrors = {};
  if (!formData.get("username")) errors.username = "Username is required";
  if (!formData.get("email")) errors.email = "Email is required";
  if (!formData.get("password")) errors.password = "Password is required";
  if (formData.get("password") !== formData.get("confirmPassword")) {
    errors.confirmPassword = "Passwords do not match";
  }

  //   const userData = {
  //     username: formData.get("username"),
  //     email: formData.get("email"),
  //     password: formData.get("password"),
  //     confirmPassword: formData.get("confirmPassword"),
  //     // avatar: formData.get("avatar") // Exclude file for JSON
  //   };

  // File validation
  //   const avatar = formData.get("avatar") as File | null;
  //   if (avatar?.size) {
  //     const validTypes = ["image/jpeg", "image/png"];
  //     if (!validTypes.includes(avatar.type)) {
  //       errors.avatar = "Only JPEG/PNG images are allowed";
  //     }
  //     if (avatar.size > 5 * 1024 * 1024) {
  //       errors.avatar = "File size must be less than 5MB";
  //     }
  //   }

  if (Object.keys(errors).length) {
    return { errors };
  }

  try {
    // Send as FormData for file upload support
    //     const response = await fetch("http://localhost:3001/auth", {
    //       method: "POST",
    //       body: JSON.stringify(userData), // Send the original FormData
    //       // Don't set Content-Type header - the browser will set it with the boundary
    //     });
    //     if (!response.ok) {
    //       const errorData = await response.json().catch(() => ({}));
    //       throw new Error(errorData.message || "Failed to submit form");
    //     }
    //     const responseData = await response.json();
    //     return redirect("/dashboard");
  } catch (error) {
    console.error("Submission error:", error);
    return {
      errors: {
        form: error instanceof Error ? error.message : "Submission failed",
      },
    };
  }
}
