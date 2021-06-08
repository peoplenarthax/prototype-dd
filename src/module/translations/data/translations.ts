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
        ["key", "es", "en"],
        ["INTRO", "hola", "hello"],
      ],
    },
  });
