import { createBrowserRouter, Navigate } from "react-router-dom";
import { Landing, Dashboard, Auth } from "@pages";
import SignUp, { signUpAction } from "@/components/ui/SignUp";
import SignIn from "@/components/ui/SignIn";
import { signInAction } from "@/components/ui/SignIn";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
      },
      {
        path: "settings",
      },
      {
        path: "games",
      },
      {
        path: "chat",
      },
      {
        path: "friends",
      },
      {
        index: true,
        element: <Navigate to="home" replace={true} />,
      },
    ],
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
        action: signUpAction,
        loader: () => {
          return null;
        },
      },
      {
        path: "signin",
        element: <SignIn />,
        action: signInAction, // Add if you have sign in logic
        loader: () => {
          return null;
        },
      },
      {
        index: true,
        element: <Navigate to="signin" replace />,
      },
    ],
  },
]);

export default router;
