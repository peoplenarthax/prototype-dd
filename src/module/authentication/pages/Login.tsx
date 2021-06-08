import * as React from "react";
import { useContext } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../providers/authentication";

export const Login = () => {
  const { user, authenticate } = useContext(AuthenticationContext);
  const { state } = useLocation();

  if (user) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <section>
      <button onClick={authenticate}>Authenticate Me!</button>
    </section>
  );
};
