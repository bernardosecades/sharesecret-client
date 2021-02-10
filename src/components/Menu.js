import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li><NavLink exact to="/">Create Secret</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        );
    }
}

export default Menu;