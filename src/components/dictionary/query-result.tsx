import React from "react";
import {observer} from "mobx-react";
import {useStore} from "../../store/hooks";

const QueryResult = () => {
    const {dictionaryStore} = useStore();

    return (
        <>
            <h2>
                Result
            </h2>
            <span>{dictionaryStore.queryResult}</span>
        </>
    );
}

export default observer(QueryResult);
