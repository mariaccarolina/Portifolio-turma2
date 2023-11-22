import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">Inicio</Link>
            <Link> Sobre</Link>
        </header>
    )
}
export default Header