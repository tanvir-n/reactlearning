/****************************************
 *
 * Title: demo use of useRef hook in react
 * Description: The useRef Hook allows to persist values between renders. It can be used to store a mutable value that does not 
 *              cause a re-render when updated. It can be also used to access a DOM element directly.
 * Author: Tanvir Nayem 
 * Date: 01-24-22
 * 
 ***************************************/
import { useState, useEffect, useRef } from 'react'

function Component() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}


export default Component;