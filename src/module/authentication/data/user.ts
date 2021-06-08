import { createBuilder } from "../../../utils/builder";

export const UserBuilder = () =>
  createBuilder({
    user: { displayName: "Test Data" },
  });
