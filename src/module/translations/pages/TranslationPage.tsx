import * as React from "react";
import { ChangeEventHandler, useContext } from "react";
import { AuthenticationContext } from "../../authentication/providers/authentication";
import { HTTPMethod, useQuery } from "../../../utils/use-query";
import { toSheetList, toTranslationObject } from "../data/decorators";
import { TranslationsContext } from "../providers/translations";

export const TranslationPage = () => {
  const { sheets, currentSheet, loading, loadSheet } =
    useContext(TranslationsContext);

  const onSelectSheet: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    loadSheet(evt.currentTarget.value);
  };
  return (
    <section>
      <select value={currentSheet} onChange={onSelectSheet}>
        <option value="" disabled>
          Choose a template...
        </option>
        {!loading &&
          sheets.map((sheet) => (
            <option value={sheet} key={sheet}>
              {sheet}
            </option>
          ))}
      </select>
    </section>
  );
};
