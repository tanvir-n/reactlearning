/****************************************
 *
 * Title: demo use of useContext hook in react
 * Description: to manage state globally use useContext hook in react
 * Author: Tanvir Nayem 
 * Date: 01-24-22
 * 
 ***************************************/
import { useState, createContext, useContext} from 'react'

const userData = createContext()

function Component1() {
    const [userName, setUserName] = useState('Tanvir')

    return (
        <userData.Provider value={[userName, setUserName]}>
            <h1>Hello {userName}! </h1>
            <Component2 />
        </userData.Provider>
    )
}

function Component2() {
    return(
        <>
            <h1>Component2</h1>
            <Component3 />
        </>
    )
}

function Component3() {
    const [userName, setUserName] = useContext(userData)

    const updateUser = () => {
        setUserName((userName) => userName='Nayem')
    }
    return (
        <>
            <h1>Component3</h1>
            <button
                onClick={updateUser}
            >update username by Nayem</button>
            <p>Hello again {userName} from Component3</p>
        </>
    )
}

export default Component1;