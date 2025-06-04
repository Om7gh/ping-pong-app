import { RouterProvider } from "react-router-dom";
import { routes } from "@routers";
import type { JSX } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="Child bg-midnight">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default App;
