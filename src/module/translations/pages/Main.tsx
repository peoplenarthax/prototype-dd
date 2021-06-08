import React from "react";

import { TranslationsProvider } from "../providers/translations";
import { TranslationPage } from "./TranslationPage";

export const Main = () => {
  return (
    <TranslationsProvider>
      <TranslationPage />
    </TranslationsProvider>
  );
};
