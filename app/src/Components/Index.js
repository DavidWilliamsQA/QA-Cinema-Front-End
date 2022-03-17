import React from "react"
import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"
import MovieCard from "./MovieCard"
import featuredMovieData from "../featuredMovieData"

export default function Index() {
    const featuredMovieElements = featuredMovieData.map(movie =>{
        return <MovieCard movie={movie} featured={true} />
    })
    const comingSoonMovieElements = featuredMovieData.map(movie =>{
        return <MovieCard movie={movie} featured={false} />
    })
    return(
        <body>
            <Header />
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a className="home__title">FEATURED MOVIES</a>
                        </div>
                        {featuredMovieElements}
                    </div>      
                </div>
            </section>

            {/* <section className="section section--bg" data-bg="img/section/section.jpg">
                <div className="content__head">
                    <div className="container">
                        <div className="row">
                        <div className="col-12">

                            <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Experiences</a>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Offers & Competitions</a>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Snacks & Drinks</a>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">Venue Hire & Events</a>
                                </li>
                            </ul>

                            <div className="content__mobile-tabs" id="content__mobile-tabs">
                                <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <input type="button" value="New items">
                                    <span></span>
                                </div>

                                <div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item"><a class="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true" onclick="openTab(event, 'Experiences')">Experiences</a></li>

                                        <li className="nav-item"><a class="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false" onclick="openTab(event, 'Offers')">Offers & Competitions</a></li>

                                        <li className="nav-item"><a class="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false" onclick="openTab(event, 'Snacks')">Snacks & Drinks</a></li>

                                        <li className="nav-item"><a class="nav-link" id="4-tab" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false" onclick="openTab(event, 'Venue')">Venue Hire & Event</a></li>
                                    </ul>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" >


                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <img src="img/hometabs/3d.jpg" height="240px" width="384px" class="middle" alt=""/>
                                </div>
                                <div className="col section__text" >
                                    <p>Swooping dinosaurs, menacing spaceships, intense fight scenes with RealD 3D, the action reaches right out to your cinema seat.</p>
                                    <p>The latest animated family films are even more delightful in 3D. Comfortable, reusable and stylish, RealD cinema eyewear looks great and performs spectacularly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <img src="img/hometabs/pop2.jpg" height="240px" width="384px" class="middle" alt=""/>
                                </div>
                                <div className="col section__text" style="padding-right: 100px">
                                    <p>Recommended to Infinity by a friend?</p>
                                    <p>If you become an Infinity member using your friend’s unique Recommend A Friend code, once you have completed your first year of membership, your 13th month of membership will be free.</p>
                                    <p>13 months of Unlimited movies for the price of 12!</p>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade show active" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <img src="img/hometabs/pop1.jpg" height="240px" width="384px" class="middle" alt=""/>
                                </div>
                                <div className="col section__text" style="padding-right: 100px">
                                    <p>Put some spotlight on your popcorn! Add some indulgence today with our popcorn toppers: Mini Rolos, Smarties, Mini Oreos or Pretzels, to personalise your popcorn.</p>
                                    <p>Discount applicable for QA Infinity members.</p>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade show active" id="tab-4" role="tabpanel" aria-labelledby="4-tab">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <img src="img/hometabs/cinema4.jpg" height="240px" width="384px" class="middle" alt=""/>
                                </div>
                                <div className="col section__text" style="padding-right: 100px">
                                    <h3>Private Screening</h3>
                                    <p>Treat your family and friends to a party they’ll never forget at QA Cinemas. Be a Hollywood star for the day, hosting your own private screening to show your favourite movie or the latest blockbuster.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section> */}

            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a className="home__title">COMING SOON</a>
                        </div>
                        {comingSoonMovieElements}
                    </div>      
                </div>
            </section>
            
            <Footer/>
        </body>
    )
}