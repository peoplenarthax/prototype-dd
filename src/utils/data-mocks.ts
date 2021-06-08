import { TranslationsMock } from "../module/translations/data/translations";

export const mocks = {
  get: [
    {
      path: "https://sheets.googleapis.com/v4/spreadsheets/1KyWk59HXtJnhTKclAird6q9c-vzqA4c6iJ8CcGCfgqo/values",
      mock: TranslationsMock().build(),
    },
  ],
};

export const getMockData = (method: string, url: string) => {
  const { mock } = mocks[method]?.find(({ path }) => url.includes(path)) ?? {};

  return mock;
};
