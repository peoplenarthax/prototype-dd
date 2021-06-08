import * as ReactDOM from "react-dom";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { PrototypeRouter } from "./module/router";
import { AuthenticationProvider } from "./module/authentication/providers/authentication";

import "bulma/css/bulma.min.css";
import "./app.css";

const App = () => {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <main className="container is-fullheight">
          <PrototypeRouter />
        </main>
      </BrowserRouter>
    </AuthenticationProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
