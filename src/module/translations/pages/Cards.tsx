import * as React from "react";
import { useContext } from "react";
import { AuthenticationContext } from "../../authentication/providers/authentication";
import { HTTPMethod, useQuery } from "../../../utils/use-query";
import { toTranslationObject } from "../data/decorators";

export const Cards = () => {
  const { user } = useContext(AuthenticationContext);
  const { exec, data } = useQuery({
    method: HTTPMethod.GET,
    url: "https://sheets.googleapis.com/v4/spreadsheets/1KyWk59HXtJnhTKclAird6q9c-vzqA4c6iJ8CcGCfgqo/values/parcel",
    onLoad: true,
    decorator: toTranslationObject,
  });

  console.log(data);

  return (
    <section>
      <h1>{user.user.displayName}</h1>
      <button onClick={exec}>Exec</button>
    </section>
  );
};
