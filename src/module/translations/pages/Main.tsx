import React from "react";
import { TranslationPage } from "../components/TranslationPage";

import { TranslationsProvider } from "../providers/translations";

export const Main = () => {
  return (
    <TranslationsProvider>
      <TranslationPage />
    </TranslationsProvider>
  );
};
