import React, {useMemo} from "react";
import {observer} from "mobx-react";
import {useStore} from "../../store/hooks";

const QueryResult = () => {
    const {dictionaryStore} = useStore();
    const [amount, matches] = useMemo(() => dictionaryStore.queryResult, [dictionaryStore.queryResult]);

    return (
        <>
            <h2>
                Result
            </h2>
            <div className="ResultsWrapper">
                <span className="ResultsAmount">{amount}:</span>
                {
                    amount > 0 && (
                        <div className="ResultsMatches">
                            {
                                matches.map((match, i) => {
                                    return <span key={i} className="ResultsMatchesItem">{match} {i < matches.length - 1 ? "," : ""}</span>
                                })
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default observer(QueryResult);
