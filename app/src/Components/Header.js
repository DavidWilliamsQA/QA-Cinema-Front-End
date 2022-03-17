import React from "react"
import QACinemaLogo from "../Images/QA-cinema-logo2.png"
import "../css/style.css"
import "../css/bootstrap-grid.min.css"

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
                                        <a className="header__nav-link">HOME</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link">MOVIES</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link">SCREENS</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link">ABOUT</a>
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