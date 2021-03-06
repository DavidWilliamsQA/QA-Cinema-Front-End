import React from "react"
import "../css/style.css"
import "../css/bootstrap-grid.min.css"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                <div className="col-6 col-sm-4 col-md-3">
                    <h6 className="footer__title">Resources</h6>
                    <ul className="footer__list">
                        <li><a href="about.html">About</a></li>
                        <li><a href="contactUs.html">Contact Us</a></li>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                </div>

                <div className="col-6 col-sm-4 col-md-3">
                    <h6 className="footer__title">Legal</h6>
                    <ul className="footer__list">
                        <li><a href="404.html">Terms of Use</a></li>
                        <li><a href="404.html">Privacy Policy</a></li>
                        <li><a href="404.html">Security</a></li>
                    </ul>
                </div>

                <div className="col-12 col-sm-4 col-md-3">
                    <h6 className="footer__title">Contact</h6>
                    <ul className="footer__list">
                        <li><a href="contactUs.html">0161 393 2271</a></li>
                        <li><a href="contactUs.html">qacinema.jobs@gmail.com</a></li>
                    </ul>
                    <ul className="footer__social">
                        <li className="facebook"><a href="www.google.com"><i className="icon ion-logo-facebook"></i></a></li>
                        <li className="instagram"><a href="www.google.com"><i className="icon ion-logo-instagram"></i></a></li>
                        <li className="twitter"><a href="https://twitter.com/QACinema2?ref_src=twsrc%5Etfw"><i className="icon ion-logo-twitter"></i></a></li>
                        <li className="vk"><a href="www.google.com"><i className="icon ion-logo-vk"></i></a></li>
                    </ul>
                </div>

                <div className="col-12">
                    <div className="footer__copyright">
                        <ul>
                            <li><a href="www.google.com">Terms of Use</a></li>
                            <li><a href="www.google.com">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                
                </div>
            </div>
        </footer>
    )
}