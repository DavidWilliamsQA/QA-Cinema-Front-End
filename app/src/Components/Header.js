import React from "react"
import QACinemaLogo from "../Images/QA-cinema-logo2.png"
import "../css/style.css"
import "../css/bootstrap-grid.min.css"
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                
                                <a className="header__logo">
                                <img src={QACinemaLogo} />
                                </a>
                                
                                <ul className="header__nav">
                                    <li className="header__nav-item" href>
                                        <Link to="" className="header__nav-link">HOME</Link>
                                    </li>
                                    <li className="header__nav-item">
                                        <Link to="" className="header__nav-link">MOVIES</Link>
                                    </li>
                                    <li className="header__nav-item">
                                        <Link to="" className="header__nav-link">SCREENS</Link>
                                    </li>
                                    <li className="header__nav-item">
                                        <Link to="" className="header__nav-link">ABOUT</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}