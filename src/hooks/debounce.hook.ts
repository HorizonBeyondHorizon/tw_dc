import {useCallback} from "react";
import {debounce} from "lodash-es";

export const useDebounceFn = (fn: (...args: any[]) => any, deps: any) => useCallback(debounce(fn, 300), deps);