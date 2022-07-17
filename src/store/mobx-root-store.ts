import {Instance, types} from "mobx-state-tree";
import {DictionaryStore} from "./dictionary-store";
import Dictionary from "../constants/dictionary.json"
import {createContext} from "react";

export type TMobxRootStore = Instance<typeof MobxRootStore>;

export const RootStoreContext = createContext<null | TMobxRootStore>(null);
export const StoreProvider = RootStoreContext.Provider;

export const MobxRootStore = types.model({
    dictionaryStore: DictionaryStore
}).create({
    dictionaryStore: {
        dictionary: Dictionary.dictionary
    }
});;