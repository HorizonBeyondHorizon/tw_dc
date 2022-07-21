import {types} from "mobx-state-tree";
import {getQueryRegex} from "../utils/dictionary.utils";
import {EQuery} from "../constants/query.enum";

export const DictionaryStore = types
    .model({
        dictionary: types.string,
        letter: types.maybe(types.string),
        query: types.maybe(types.string)
    })
    .actions((store) => {
        const setQuery = (query: string) => {
            store.query = query;
        };

        const setDictionary = (text: string) => {
            store.dictionary = text;
        }

        const setLetter = (letter: string) => {
            store.letter = letter;
        };

        return { setQuery, setDictionary, setLetter };
    })
    .views((store) => ({
        get queryResult(): [number, string[]] {
            if(store.query && store.letter){
                const regexFn = getQueryRegex(store.query as EQuery);
                const matches = store.dictionary.match(regexFn(store.letter));
                return [matches?.length ?? 0, matches ?? []];
            } else {
                return [0, []]
            }
        }
    }));