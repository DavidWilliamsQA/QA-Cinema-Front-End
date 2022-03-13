import React from "react"
import "../style.css"
import "../bootstrap-grid.min.css"

export default function FeaturedMovies(props){
    
    return (

        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card__cover">
                                <img src={props.img} alt="" />
                                <a id="play512200" href="www.google.com" className="card__play">
                                    <i className="icon ion-ios-play"></i>
                                </a>
                            </div>
                            <div className="card__content">
                                    <h3 className="card__title">
                                        <a id="title512200" href="www.google.com">{props.title}</a>
                                    </h3>
                                    <span className="card__category">
                                                genres 
                                            </span>
                                            <div className="card__wrap">
                                                <ul className="card__list">
                                                    <li>{props.releaseDate}</li>
                                                    <li><a  id="ageRating512200" href="www.google.com">{props.rating}</a></li>
                                                </ul>
                                            </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>


        
    )
}