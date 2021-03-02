import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./route";

import Financa from './pages/Financas/Financas'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

    </div>
  );
};

export default App;
