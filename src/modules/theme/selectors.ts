import { RootState } from "../index.ts";
import { Theme } from "./types.ts";
export const selectTheme = ({ theme }: RootState): string | Theme =>
  theme.theme;
