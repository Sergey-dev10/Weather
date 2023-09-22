import {RootState} from "../index.ts";
import {Theme} from "./types.ts";
export const selectTheme = ({theme}: RootState): Theme => theme.theme;