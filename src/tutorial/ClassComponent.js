/****************************************
 *
 * Title: 
 * Description: 
 * Author: Tanvir Nayem 
 * Date: 01-26-22
 * 
 ***************************************/

import React from 'react';
import './App.css';

class ClassComponent extends React.Component {

    constructor() {
        super();
        this.state = {color: "red"};
    }
    
    shouldComponentUpdate() {
        // this will prevent updating the DOM element when state is changed
        // Default is true
        return false;
    }

    componentWillUnmount() {
        // This method is called right before unmounting a component
        alert('The h3 header will be removed.')
    }

    render() {
        return (
            <div className="App">
                <h3>Hello Tanvir! This is react class Component</h3>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: "yellow"})
          }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Before the update, the favorite was " + prevState.favoritecolor;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = "The updated favorite is " + this.state.favoritecolor;
    }
}

export default ClassComponent;