import * as React from "react";
import { ChangeEventHandler, useContext, useState } from "react";
import { TranslationsContext } from "../providers/translations";

export const Header = ({ onSave }) => {
  const {
    sheets,
    currentSheet,
    loading,
    loadSheet,
    sheetKeys,
    changeLang,
    currentLang,
  } = useContext(TranslationsContext);

  const [_, ...languages] = Object.keys(sheetKeys ?? {});
  const onSelectSheet: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    loadSheet(evt.currentTarget.value);
  };

  const onLangSelected: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    changeLang(evt.currentTarget.value);
  };

  return (
    <nav
      className="navbar is-align-items-center"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-align-items-center">
        <img
          className="navbar-item"
          src="https://d2kq0urxkarztv.cloudfront.net/5a1d92a24e141c2dd16f2604/1997565/upload-48d383b0-8acb-4dd9-92ba-b03ead86099e.png"
          style={{ height: "30px" }}
        />
      </div>
      <div className="select is-primary my-4 mx-4">
        <select value={currentSheet} onChange={onSelectSheet}>
          <option value="" disabled>
            Choose a template...
          </option>
          {!loading &&
            sheets.map((sheet) => (
              <option value={sheet.title} key={sheet.title}>
                {sheet.title}
              </option>
            ))}
        </select>
      </div>

      {sheetKeys && (
        <div className="select is-primary my-4 mx-4">
          <select value={currentLang} onChange={onLangSelected}>
            <option value="" disabled>
              Choose a template...
            </option>
            {!loading &&
              languages.map((language) => (
                <option value={language} key={language}>
                  {language}
                </option>
              ))}
          </select>
        </div>
      )}

      <button className="button is-success" onClick={onSave}>
        Save translations ❤
      </button>
    </nav>
  );
};
