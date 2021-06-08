import React from "react";
import { Header } from "../components/Header";

import { TranslationsProvider } from "../providers/translations";

export const Main = () => {
  return (
    <TranslationsProvider>
      <Header />
    </TranslationsProvider>
  );
};
