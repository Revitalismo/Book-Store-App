import { useState } from "react";
import { IKContext } from "imagekitio-react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RouteLayout } from "./Routes/Index";
import { Sidebar } from "./Components/Navbar/navbar.mjs"

const IKEndpoint = "https://ik.imagekit.io/Jul1an/BookStoreApp";

const queryClient = new QueryClient();

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

    return (
        <QueryClientProvider client={queryClient}>

            <Sidebar.Provider value={[showSidebar, setShowSidebar]}>

              <IKContext urlEndpoint={IKEndpoint}>
                  <RouteLayout />
                  <ReactQueryDevtools position="bottom-right" />
              </IKContext>
            </Sidebar.Provider>
        </QueryClientProvider>
    );
}

export default App
