import {EQuery} from "../constants/query.enum";
import {queryLabelsMap, regexMap} from "../constants/maps/dictionary-query-maps";

export const getQueryLabel = (query: EQuery) => {
    return queryLabelsMap[query];
};

export const getQueryRegex = (query: EQuery) => {
    return regexMap[query];
};