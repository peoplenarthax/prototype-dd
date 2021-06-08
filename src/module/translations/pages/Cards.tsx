import * as React from "react";
import { useContext } from "react";
import { AuthenticationContext } from "../../../providers/authentication";

export const Cards = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <section>
      <h1>{user.user.displayName}</h1>
    </section>
  );
};
