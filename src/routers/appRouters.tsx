import { createBrowserRouter } from "react-router-dom";
import { Landing, Dashboard, Connection } from "@pages";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/connection",
    element: <Connection />,
  },
]);

export default router;
