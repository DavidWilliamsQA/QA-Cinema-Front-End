import React from "react"
import "../style.css"
import "../bootstrap-grid.min.css"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                <div class="col-6 col-sm-4 col-md-3">
                    <h6 class="footer__title">Resources</h6>
                    <ul class="footer__list">
                        <li><a href="about.html">About</a></li>
                        <li><a href="contactUs.html">Contact Us</a></li>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                </div>

                <div class="col-6 col-sm-4 col-md-3">
                    <h6 class="footer__title">Legal</h6>
                    <ul class="footer__list">
                        <li><a href="404.html">Terms of Use</a></li>
                        <li><a href="404.html">Privacy Policy</a></li>
                        <li><a href="404.html">Security</a></li>
                    </ul>
                </div>

                <div class="col-12 col-sm-4 col-md-3">
                    <h6 class="footer__title">Contact</h6>
                    <ul class="footer__list">
                        <li><a href="contactUs.html">0161 393 2271</a></li>
                        <li><a href="contactUs.html">qacinema.jobs@gmail.com</a></li>
                    </ul>
                    <ul class="footer__social">
                        <li class="facebook"><a href="#"><i class="icon ion-logo-facebook"></i></a></li>
                        <li class="instagram"><a href="#"><i class="icon ion-logo-instagram"></i></a></li>
                        <li class="twitter"><a href="https://twitter.com/QACinema2?ref_src=twsrc%5Etfw"><i class="icon ion-logo-twitter"></i></a></li>
                        <li class="vk"><a href="#"><i class="icon ion-logo-vk"></i></a></li>
                    </ul>
                </div>

                <div class="col-12">
                    <div class="footer__copyright">
                        <ul>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                
                </div>
            </div>
        </footer>
    )
}