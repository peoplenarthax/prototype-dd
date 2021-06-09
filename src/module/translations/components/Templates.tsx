import * as React from "react";
import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { TranslationsContext } from "../providers/translations";
import { DefaultTemplate } from "./templates/default";
import { GarajeTemplate } from "./templates/garaje";

const TemplateMap = {
  garaje: GarajeTemplate,
};
export const Template = ({ lang, sheet, translations, keys, onChange }) => {
  const Component = TemplateMap[sheet] ?? DefaultTemplate;

  const showTemplate = sheet && keys && lang;

  return (
    <section className="section">
      {showTemplate ? (
        <Component
          key={lang}
          keys={keys}
          translations={translations}
          onChange={onChange}
        />
      ) : (
        <h1> Loading Things</h1>
      )}
    </section>
  );
};
