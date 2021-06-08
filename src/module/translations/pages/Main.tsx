import React from "react";
import { Header } from "../components/Header";
import { Template } from "../components/Templates";

import { TranslationsProvider } from "../providers/translations";

export const Main = () => {
  return (
    <TranslationsProvider>
      <Header />
      <Template />
    </TranslationsProvider>
  );
};
