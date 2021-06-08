import { SheetsResponse, TranslationResponse } from "./translations";

const transpose = (matrix) => matrix[0].map((_, c) => matrix.map((r) => r[c]));

const toKeyValues = (matrix) => {
  return matrix.reduce(
    (acc, val) => {
      const [key, ...values] = val;

      return {
        ...acc,
        [key]: values,
      };
    },

    {}
  );
};
export const toTranslationObject = ({ data }: TranslationResponse) => {
  return toKeyValues(transpose(data.values));
};

export const toSheetList = ({ data }: SheetsResponse) => {
  return data.sheets.map(({ properties }) => properties.title);
};
