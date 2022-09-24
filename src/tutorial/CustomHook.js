/****************************************
 *
 * Title: Custom react hook
 * Description: Custom react hook to work in differetnt react component
 * Author: Tanvir Nayem 
 * Date: 01-25-22
 * 
 ***************************************/
 import { useState, useEffect } from "react";

 function useFetch(url) {
   const [data, setData] = useState(null);
 
   useEffect(() => {
     fetch(url)
       .then((res) => res.json())
       .then((data) => setData(data));
   }, [url]);
 
   return [data];
 };
 
 export default useFetch;

/** below function should be on other file to use useFetch custom react hook
 * this way to use useFetch hook.

function Home() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

*/