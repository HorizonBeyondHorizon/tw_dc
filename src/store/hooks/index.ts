import React from "react";
import {RootStoreContext, TMobxRootStore} from "../mobx-root-store";

export function useStore(): TMobxRootStore{
    const store = React.useContext(RootStoreContext);
    if(store === null){
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
}