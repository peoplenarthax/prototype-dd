import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Template } from "../components/Templates";

import {
  TranslationsContext,
  TranslationsProvider,
} from "../providers/translations";

export const TranslationPage = () => {
  const {
    currentSheet,
    sheetKeys,
    currentLang,
    loading,
    submitChanges,
    sheets,
  } = useContext(TranslationsContext);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const { _, ...translationKeys } = sheetKeys ?? {};

    setTranslations(translationKeys);
  }, [sheetKeys]);

  const onChange = (key) => (evt) => {
    setTranslations({
      ...translations,
      [currentLang]: {
        ...translations[currentLang],
        [key]: evt.currentTarget.value,
      },
    });
  };

  const onSave = () => {
    // console.log(translations);
    const { sheetId } = sheets.find(({ title }) => title === currentSheet);
    console.log(Object.values(translations[currentLang]));
    console.log(translations[currentLang]);
    const rowIndex = Object.keys(translations).findIndex(
      (key) => key === currentLang
    );

    const body = {
      requests: [
        {
          updateCells: {
            fields: "*",
            rows: [
              {
                values: Object.values(translations[currentLang]).map(
                  (translationValue) => ({
                    userEnteredValue: {
                      stringValue: translationValue;
                    }
                  })
                ),
              },
            ],
            start: {
              columnIndex: 1,
              rowIndex: rowIndex,
              sheetId,
            },
          },
        },
      ],
    };

    submitChanges(body);
  };
  return (
    <>
      <Header onSave={onSave} />
      {!loading && (
        <Template
          lang={currentLang}
          sheet={currentSheet}
          keys={sheetKeys?.key}
          translations={translations[currentLang]}
          onChange={onChange}
        />
      )}
    </>
  );
};
