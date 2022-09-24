import React from "react";

function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                React Learning
            </a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/blogs">Blog Articles</a>
                </li>
                <li>
                    <a href="/contact">Contact Us</a>
                </li>
                <li>
                    <a href="/signin">Sign in</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;