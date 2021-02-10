import React from "react";
import logo from "../logo.png";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink exact to="/"><img src={logo} alt="Logo" width={"200px"} /></NavLink>
    );
}

export default Logo;