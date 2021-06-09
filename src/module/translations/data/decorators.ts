import { SheetsResponse, TranslationResponse } from "./translations";

const toKeyValues = (matrix) => {
  const { key, ...translations } = matrix.reduce((acc, val) => {
    const [key, ...values] = val;

    return {
      ...acc,
      [key]: values,
    };
  }, {});

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
  return toKeyValues(data.values);
};

export const toSheetList = ({ data }: SheetsResponse) => {
  return data.sheets.map(({ properties }) => ({ title: properties.title, sheetId: properties.sheetId});
};

export const toBatchUpdateBody = () => {
  return {
    requests: [
      {
        updateCells = {
          fields = "VALORRRR",
          rows = [
            {
              values = [
                {
                  userEnteredValue = {
                    stringValue = "MAAASSS VALOR",
                  },
                },
                {
                  userEnteredValue = {
                    stringValue = "MENOS VALOR",
                  },
                },
              ],
            },
          ],
          start = {
            columnIndex = 7,
            rowIndex = 7,
            sheetId = "garaje",
          },
        },
      },
    ],
  };
};
