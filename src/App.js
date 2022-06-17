import React, { useState } from "react";

// pages
import GetStarted from "./pages/GetStarted";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

// scss
import "./scss/app.scss";

const App = () => {
  const [page, setPage] = useState("get-started");

  let currentPageComp = <GetStarted />;

  switch (page) {
    case "get-started":
      currentPageComp = <GetStarted setPage={setPage} />;
      break;
    case "quiz":
      currentPageComp = <Quiz />;
      break;
    case "result":
      currentPageComp = <Result />;
      break;

    default:
      break;
  }

  return (
  <main>
    {currentPageComp}
  </main>
  );
};

export default App;
