import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { ReactQueryDevtools } from "react-query/devtools";

const Content = () => {
  const [page, setPage] = useState("planets");
  const pageSetter = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={pageSetter} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </>
  );
};

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Content />
    </QueryClientProvider>
  );
};

export default App;
