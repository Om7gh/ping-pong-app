import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Landing,
  Dashboard,
  Auth,
  Settings,
  Games,
  Chat,
  Friends,
  Profile,
} from "@pages";
import SignUp, { signUpAction } from "@/components/ui/SignUp";
import SignIn from "@/components/ui/SignIn";
import { signInAction } from "@/components/ui/SignIn";
import { HomeDashboard } from "@/components/layout";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <HomeDashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        index: true,
        element: <Navigate to="home" replace />,
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
        action: signInAction,
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
