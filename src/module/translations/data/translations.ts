import { createBuilder } from "../../../utils/builder";

export type TranslationResponse = {
  data: {
    values: string[][];
  };
};
export const TranslationsMock = () =>
  createBuilder<TranslationResponse>({
    data: {
      values: [
        ["key", "INTRO"],
        ["es", "hola"],
        ["en", "hello"],
      ],
    },
  });

export type SheetsResponse = {
  data: {
    sheets: { properties: { sheetId: number; title: string } }[];
  };
};
export const SheetsMock = () =>
  createBuilder({
    data: {
      sheets: [
        { properties: { sheetId: 0, title: "Example" } },
        { properties: { sheetId: 1, title: "Not an example" } },
      ],
    },
  });
