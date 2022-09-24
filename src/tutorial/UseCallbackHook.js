/****************************************
 *
 * Title: demo use of useCallback hook in react
 * Description: This allows us to isolate resource intensive functions so that they will not automatically run on every render.
 * Author: Tanvir Nayem 
 * Date: 01-25-22
 * 
 ***************************************/
import { useState, useCallback } from "react";
import DatabaseValue from './Data'


function CallBackComponent() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState([])

    const increment = () => {
        setCount((c) => c+1)
    }

    const appendValue = useCallback(() => {
        setValue((iv) => [...iv, 'New Value'])
    }, []);

    return (
        <>
            <DatabaseValue data={value} addData={appendValue} />
            <hr/>
            <div>
                Count: {count}
                <button
                    onClick={increment}
                >Add Data (+)</button>
            </div>
        </>
    )
}


export default CallBackComponent;
