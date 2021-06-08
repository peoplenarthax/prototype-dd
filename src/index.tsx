import * as ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PrototypeRouter } from "./module/router";
import { AuthenticationProvider } from "./providers/authentication";

const Main = () => {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <main>
          <PrototypeRouter />
        </main>
      </BrowserRouter>
    </AuthenticationProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById("app"));
