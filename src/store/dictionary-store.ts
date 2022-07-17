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

        const setLetter = (letter: string) => {
            store.letter = letter;
        };

        return { setQuery, setLetter };
    })
    .views((store) => ({
        get queryResult() {
            if(store.query && store.letter){
                const regexFn = getQueryRegex(store.query as EQuery);

                return store.dictionary.match(regexFn(store.letter))?.length ?? 0;
            } else {
                return 0
            }
        }
    }));