import React, { createContext, useState, useEffect } from "react";
import firebase from "../../../config/firebase";
import { HTTPMethod, useQuery } from "../../../utils/use-query";
import { toSheetList, toTranslationObject } from "../data/decorators";

interface ITranslationsContext {
  sheets: { title: string; sheetId: number }[];
  currentSheet: string;
  loadSheet: Function;
  sheetKeys: { [k: string]: string[] };
  loading: boolean;
  currentLang: string;
  changeLang: Function;
  submitChanges: Function;
}

export const TranslationsContext = createContext<ITranslationsContext>({
  sheets: [],
  currentSheet: "",
  loadSheet: () => {},
  sheetKeys: {},
  loading: true,
  currentLang: "",
  changeLang: () => {},
  submitChanges: () => {},
});

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/spreadsheets");

export const TranslationsProvider: React.FC = ({ children }) => {
  const [sheets, setSheets] = useState([]);
  const [currentSheet, setCurrentSheet] = useState("");
  const [currentLang, setCurrentLang] = useState("");
  const [sheetKeys, setSheetKeys] = useState({});

  const { data: sheetsResponse, loading: sheetsLoading } = useQuery({
    method: HTTPMethod.GET,
    url: "https://sheets.googleapis.com/v4/spreadsheets/1KyWk59HXtJnhTKclAird6q9c-vzqA4c6iJ8CcGCfgqo",
    onLoad: true,
    decorator: toSheetList,
  });

  const {
    exec: querySheetValues,
    data: sheetKeysResponse,
    loading: keysLoading,
  } = useQuery({
    method: HTTPMethod.GET,
    url: `https://sheets.googleapis.com/v4/spreadsheets/1KyWk59HXtJnhTKclAird6q9c-vzqA4c6iJ8CcGCfgqo/values/${currentSheet}`,
    decorator: toTranslationObject,
  });

  const { exec: submitChanges, loading: submitLoading } = useQuery({
    method: HTTPMethod.POST,
    url: `https://sheets.googleapis.com/v4/spreadsheets/1KyWk59HXtJnhTKclAird6q9c-vzqA4c6iJ8CcGCfgqo:batchUpdate`,
  });

  useEffect(() => {
    querySheetValues();
  }, [currentSheet]);

  useEffect(() => {
    setSheets(sheetsResponse);
    setSheetKeys(sheetKeysResponse);
  }, [sheetsResponse, sheetKeysResponse]);

  return (
    <TranslationsContext.Provider
      value={{
        sheets,
        currentSheet,
        sheetKeys,
        loadSheet: (sheetName: string) => {
          setCurrentSheet(sheetName);
        },
        loading: keysLoading || sheetsLoading,
        currentLang,
        changeLang: (lang: string) => {
          setCurrentLang(lang);
        },
        submitChanges,
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
};
