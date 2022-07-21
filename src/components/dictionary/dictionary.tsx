import React, {ChangeEvent, useEffect, useState} from "react";
import {observer} from "mobx-react";
import {useStore} from "../../store/hooks";
import {useDebounceFn} from "../../hooks/debounce.hook";
import "./dictionary.css"

const Dictionary = () => {
    const {dictionaryStore} = useStore();
    const [dictionary, setDictionary] = useState(dictionaryStore.dictionary);

    const handleDictionaryChangeWithDebounce = useDebounceFn( (text: string) => {
        dictionaryStore.setDictionary(text);
    }, []);

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => setDictionary(e.target.value);

    useEffect(() => {
        handleDictionaryChangeWithDebounce(dictionary);
    }, [dictionary]);

    return (
        <>
            <h1>
                Dictionary
            </h1>
            <textarea value={dictionary} onChange={handleTextAreaChange} className="TextArea"/>
        </>
    );
}

export default observer(Dictionary);
