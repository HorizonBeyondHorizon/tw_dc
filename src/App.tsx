import React from 'react';
import DictionaryQueryPicker from "./components/dictionary/dictionary-query-picker";
import {MobxRootStore, StoreProvider} from "./store/mobx-root-store";
import Dictionary from "./components/dictionary/dictionary";
import DictionaryLetterInput from "./components/dictionary/dictionary-letter-input";
import QueryResult from "./components/dictionary/query-result";

function App() {
    return (
        <StoreProvider value={MobxRootStore}>
            <div className="App">
                <Dictionary />
                <DictionaryQueryPicker />
                <DictionaryLetterInput />
                <QueryResult />
            </div>
        </StoreProvider>
  );
}

export default App;
