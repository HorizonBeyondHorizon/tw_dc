import React from "react";
import {observer} from "mobx-react";
import {useStore} from "../../store/hooks";

const DictionaryLetterInput = () => {
    const {dictionaryStore} = useStore();

    const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dictionaryStore.setLetter(event.target.value)
    }

    return (
        <>
            <h2>
                Input a letter for a query
            </h2>
            <input onChange={changeValueHandler} maxLength={1}/>
        </>
    );
}

export default observer(DictionaryLetterInput);
