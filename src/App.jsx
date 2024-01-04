import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Schedule from "./pages/Schedule";
import Poster from "./pages/Poster";
import Account from "./pages/Account";
import AddMovie from "./pages/AddMovie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 10000,
      // staleTime: 0,
    },
  },
});

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="schedule" />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="poster" element={<Poster />} />
                <Route path="account" element={<Account />} />
                <Route path="addMovie" element={<AddMovie />} />
                <Route path="addMovie/:movieId" element={<AddMovie />} />
              </Route>
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var9--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
