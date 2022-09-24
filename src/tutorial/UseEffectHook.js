/****************************************
 *
 * Title: demo use of useEffect hook in react
 * Description: The useEffect Hook allows us to perform side effects in our components.
 * Author: Tanvir Nayem 
 * Date: 01-24-22
 * 
 ***************************************/
import {useState , useEffect} from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    const [calc, setCalc] = useState(0);

    useEffect(() => {
        setCalc(() => count * 2);
    }, [count]);

    /* some useEffect require cleanup to reduce memory leak
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []); // for the empty array it will render only first time
    */

    const updateCounter = () => {
        setCount((c)=> c+1)
    }

    return (
        <>
            <p>Counter count is: {count}</p>
            <button
                onClick={updateCounter}
            >Increase counter +</button>
            <p>Multiplication by 2 is: {calc}</p>
        </>
    )
}

export default Counter;