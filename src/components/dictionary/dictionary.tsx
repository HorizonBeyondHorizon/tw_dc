import React from "react";
import {observer} from "mobx-react";
import {useStore} from "../../store/hooks";

const Dictionary = () => {
    const {dictionaryStore} = useStore();

    return (
        <>
            <h1>
                Dictionary
            </h1>
            <p>
                {dictionaryStore.dictionary}
            </p>
        </>
    );
}

export default observer(Dictionary);
