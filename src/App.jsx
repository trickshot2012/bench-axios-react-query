import React from "react";
import AxiosUseQuery from "./AxiosUseQuery";
import FetchUseEffect from "./FetchUseEffect";

const App = () => {
  return (
    <div>
      <h1>Performance Comparison</h1>
      <h2>Using useQuery with Axios</h2>
      <AxiosUseQuery />
      <h2>Using fetch with useEffect</h2>
      <FetchUseEffect />
    </div>
  );
};

export default App;
