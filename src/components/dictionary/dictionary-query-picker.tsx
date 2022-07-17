import React from "react";
import {observer} from "mobx-react";
import "./dictionary.css"
import {useStore} from "../../store/hooks";
import {EQuery} from "../../constants/query.enum";
import {getQueryLabel} from "../../utils/dictionary.utils";

const DictionaryQueryPicker = () => {
    const {dictionaryStore} = useStore();

    const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dictionaryStore.setQuery(event.target.value)
    }

    return (
        <>
            <h1>
                Pick a query
            </h1>
            <div onChange={changeValueHandler} className="RadioGroupWrapper">
                {
                    Object.values(EQuery).map((value)=> {
                        return (
                            <div key={value}>
                                <label>
                                    <input type="radio" value={value} name="gender" />
                                    {getQueryLabel(value)}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default observer(DictionaryQueryPicker);
