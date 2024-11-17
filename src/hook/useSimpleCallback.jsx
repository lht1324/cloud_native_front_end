import {useCallback} from "react";

function useSimpleCallback(callback, ...deps) {
    return useCallback(callback, [callback, ...deps]);
}

export { useSimpleCallback };