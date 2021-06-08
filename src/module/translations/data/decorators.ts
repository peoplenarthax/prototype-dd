import { TranslationResponse } from "./translations";

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
