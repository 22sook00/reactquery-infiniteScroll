import React, { Component } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./pages/Main/Main";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <React.Suspense fallback="Loading">
          <Main />
        </React.Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
