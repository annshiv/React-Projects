import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  return (
    // <div className="App">
    //   <Weather />
    // </div>
    <SWRConfig
      value={{
        focusThrottleInterval: 20000,
        fetcher,
      }}
    >
      <Weather />
    </SWRConfig>
  );
}

export default App;
