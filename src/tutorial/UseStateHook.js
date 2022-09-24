/****************************************
 *
 * Title: useState Hook
 * Description: demo use of useState hook in react
 * Author: Tanvir Nayem 
 * Date: 09-24-21
 * 
 ***************************************/

import React from "react";
import { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'Mustang',
        color: 'Red',
        year: 2022
    });
    
    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color: 'Blue'}
        })
    }

    return (
        <>
            <h1>My car name is {car.brand}</h1>
            <p>It's {car.color} {car.model} and from {car.year}</p>
            <button
                type='button'
                onClick={updateColor}
            >Change color
            </button>
        </>
    )
}

export default Car;
