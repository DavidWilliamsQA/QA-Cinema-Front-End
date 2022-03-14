import React from "react"
import "../style.css"
import "../bootstrap-grid.min.css"

export default function FeaturedMovies(props){
    
    return (

        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="card">
                <div className="card__cover">
                    <img src={props.movie.img} alt="" />
                    <a id="play512200" href="www.google.com" className="card__play">
                        <i className="icon ion-ios-play"></i>
                    </a>
                </div>
                <div className="card__content">
                    <h3 className="card__title">
                        <a id="title512200" href="www.google.com">{props.movie.title}</a>
                    </h3>
                    <span className="card__category">
                        genres 
                    </span>
                    <div className="card__wrap">
                        <ul className="card__list">
                            <li>{props.movie.releaseDate}</li>
                            <li><a  id="ageRating512200" href="www.google.com">{props.movie.rating}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}