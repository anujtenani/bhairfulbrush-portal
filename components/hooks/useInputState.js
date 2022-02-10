import {useCallback, useState} from "react";

function useInputState(props){
    const [val, setVal] = useState(props)
    const inputVal = useCallback((e) => {
        setVal(e.target.value)
    }, [])
    return [val, inputVal]
}

export default useInputState