import React, {useState} from "react";
import {observer} from "mobx-react";
import {useStore} from "../../store/hooks";

const DictionaryLetterInput = () => {
    const {dictionaryStore} = useStore();
    const [letter, setLetter] = useState(dictionaryStore.letter ?? "");

    const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const re = new RegExp(/[a-z]/gi);

        // if value is not blank, then test the regex
        if (event.target.value === "" || re.test(event.target.value)) {
            setLetter(event.target.value);
            dictionaryStore.setLetter(event.target.value);
        }
    }

    return (
        <>
            <h2>
                Input a letter for a query
            </h2>
            <input type="text" onChange={changeValueHandler} maxLength={1} value={letter} placeholder="Only letters allowed"/>
        </>
    );
}

export default observer(DictionaryLetterInput);
