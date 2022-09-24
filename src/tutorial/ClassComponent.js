import React from 'react';
import './App.css';

class Header extends React.Component {

    componentWillUnmount() {
        alert('The h3 header will be removed.')
    }

    render() {
        return (
            <div className="App">
                <h3>Hello Tanvir! This is react class Component</h3>
            </div>
        )
    }
}

export default Header;