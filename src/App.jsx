import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Schedule from "./pages/Schedule";
import Poster from "./pages/Poster";
import Account from "./pages/Account";
import AddMovie from "./pages/AddMovie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 10000,
      // staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
