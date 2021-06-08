import * as React from "react";
import { useContext } from "react";
import { AuthenticationContext } from "../../authentication/providers/authentication";
import { HTTPMethod, useQuery } from "../../../utils/use-query";
import { toSheetList, toTranslationObject } from "../data/decorators";

export const TranslationPage = () => {
  const { user } = useContext(AuthenticationContext);
  const { data, loading } = useQuery({
    method: HTTPMethod.GET,
    url: "https://sheets.googleapis.com/v4/spreadsheets/1KyWk59HXtJnhTKclAird6q9c-vzqA4c6iJ8CcGCfgqo",
    onLoad: true,
    decorator: toSheetList,
  });

  return (
    <section>
      <h1>{user.user.displayName}</h1>
      {!loading && data.map((sheet) => <li>{sheet}</li>)}
    </section>
  );
};
