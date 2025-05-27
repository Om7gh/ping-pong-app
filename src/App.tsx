import { RouterProvider } from "react-router-dom";
import { routes } from "@routers";
import type { JSX } from "react";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="Child bg-midnight ">
        <RouterProvider router={routes} />
      </div>
    </div>
  );
};

export default App;
