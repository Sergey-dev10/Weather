import {RootState} from "../index.ts";
import {Place} from "./types.ts";
import {REQUEST_STATUS} from "../../core/api/types.ts";

export const selectPlaces = ({ search }: RootState): Place[] => search.result;
export const selectSearchStatus = ({ search }: RootState): REQUEST_STATUS =>
    search.status;