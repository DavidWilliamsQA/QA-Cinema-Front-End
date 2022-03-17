import React from "react"
import "../css/style.css"
import "../css/bootstrap-grid.min.css"
import "../css/ionicons.min.css"
import "../css/plyr.css"
const {REACT_APP_MOVIE_DB_API_KEY} = process.env;

export default function MovieCard(props){
    console.log(`${REACT_APP_MOVIE_DB_API_KEY}`)
    return (

        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="card">
                <div className="card__cover">
                    <img src={props.movie.img} alt="" />
                    <a id="play512200" href="www.google.com" className="card__play">
                        {props.featured ? <i>BOOK NOW</i> : <i>COMING SOON</i>}
                    </a>
                </div>
                <div className="card__content">
                    <h3 className="card__title">
                        <a id="title512200" href="www.google.com">{props.movie.title}</a>
                    </h3>
                    <span className="card__category">
                        {props.movie.genres}
                    </span>
                    <span class="card__rate"><i class="icon ion-ios-star"></i>{props.movie.rating}</span>
                        <ul className="card__list">
                            <li>
                                <a  id="ageRating512200" href="www.google.com">
                                    {props.movie.age_rating}
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
        
    )
}