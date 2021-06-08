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
    <section className="columns level is-vcentered hero is-fullheight is-justify-content-center">
      <article className="column is-half has-text-centered">
        <h1 className="title is-2">Sign in</h1>
        <p className="is-size-4">
          In order to access we need to verify your identity
        </p>
        <button
          className="button is-primary is-rounded my-4"
          onClick={authenticate}
        >
          Authenticate Me 🚀
        </button>
      </article>
    </section>
  );
};
