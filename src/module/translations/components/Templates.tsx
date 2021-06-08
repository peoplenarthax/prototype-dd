import * as React from "react";
import { ChangeEventHandler, useContext } from "react";
import { TranslationsContext } from "../providers/translations";
import { DefaultTemplate } from "./templates/default";
import { GarajeTemplate } from "./templates/garaje";

const TemplateMap = {
  garaje: GarajeTemplate,
};
export const Template = () => {
  const { currentSheet, sheetKeys, loading, currentLang } =
    useContext(TranslationsContext);

  const { key, ...translation } = sheetKeys ?? {};

  const Component = TemplateMap[currentSheet] ?? DefaultTemplate;

  return (
    <section className="section">
      {currentSheet && !loading && key && currentLang ? (
        <Component
          key={currentLang}
          keys={sheetKeys.key}
          translations={translation[currentLang]}
        />
      ) : (
        <h1> Loading Things</h1>
      )}
    </section>
  );
};
