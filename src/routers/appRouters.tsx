import { HomeDashboard } from "@/components/layout";
import { Activation, FinishRegister, SignIn, SignUp } from "@/components/ui";
import { activatedAction } from "@/components/ui/auth/Activation";
import { avatarAction } from "@/components/ui/auth/FinishRegister";
import { signInAction } from "@/components/ui/auth/SignIn";
import { signUpAction } from "@/components/ui/auth/SignUp";
import { Auth, Chat, Dashboard, Friends, Games, Landing, Profile, Settings } from "@/pages";
import { settingHandler } from "@/pages/Settings";
import { createBrowserRouter, Navigate } from "react-router-dom";

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
        action: settingHandler,
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
      },
      {
        path: "signin",
        element: <SignIn />,
        action: signInAction,
      },
      {
        path: "avatar",
        element: <FinishRegister />,
        action: avatarAction,
      },
      {
        path: "activation",
        element: <Activation />,
        action: activatedAction,
      },
      {
        index: true,
        element: <Navigate to="signin" replace />,
      },
    ],
  },
]);

export default router;
