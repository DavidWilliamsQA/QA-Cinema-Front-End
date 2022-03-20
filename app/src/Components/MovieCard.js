import React from "react"
import "../css/style.css"
import "../css/bootstrap-grid.min.css"
import "../css/ionicons.min.css"
import "../css/plyr.css"

export default function MovieCard(props){
    return (
        // {props.movie.img}
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="card">
                <div className="card__cover">
                    <img src={`https://image.tmdb.org/t/p/original${props.movie.data.poster_path}`} alt="" />
                    <a id="play512200" href="www.google.com" className="card__play">
                        {props.featured ? <i>BOOK NOW</i> : <i>COMING SOON</i>}
                    </a>
                </div>
                <div className="card__content">
                    <h3 className="card__title">
                        <a id="title512200" href="www.google.com">{props.movie.data.title}</a>
                    </h3>
                    <span className="card__category">
                        {props.movie.genres}
                    </span>
                    <span class="card__rate"><i class="icon ion-ios-star"></i>{props.movie.data.vote_average}</span>
                        <ul className="card__list">
                            <li>
                                <a  id="ageRating512200" href="www.google.com">
                                    {props.data.filter(({api_ID}) => api_ID === props.movie.data.id)[0].rating}
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
        
    )
}