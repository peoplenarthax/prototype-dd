import { SheetsResponse, TranslationResponse } from "./translations";

const transpose = (matrix) => matrix[0].map((_, c) => matrix.map((r) => r[c]));

const toKeyValues = (matrix) => {
  const { key, ...translations } = matrix.reduce((acc, val) => {
    const [key, ...values] = val;

    return {
      ...acc,
      [key]: values,
    };
  }, {});

  console.log({ key, translations });
  const translationsWithKey = Object.keys(translations).reduce(
    (acc, val) => ({
      ...acc,
      [val]: translations[val].reduce(
        (baseObject, translation, index) => ({
          ...baseObject,
          [key[index]]: translation,
        }),
        {}
      ),
    }),
    {}
  );

  return { key, ...translationsWithKey };
};
export const toTranslationObject = ({ data }: TranslationResponse) => {
  return toKeyValues(transpose(data.values));
};

export const toSheetList = ({ data }: SheetsResponse) => {
  return data.sheets.map(({ properties }) => properties.title);
};
