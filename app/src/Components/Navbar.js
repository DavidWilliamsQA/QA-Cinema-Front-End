import React from "react"
import QACinemaLogo from "../Images/QA-cinema-logo2.png"
import "../style.css"

export default function Navbar(){
    return (
        <nav>
            <img src={QACinemaLogo} className="nav--icon"/>
            <h3 className="nav--item">HOME</h3>
            <h3 className="nav--item">MOVIES</h3>
            <h3 className="nav--item">SCREENS</h3>
            <h3 className="nav--item">ABOUT</h3>
        </nav>
    )
}