// import React from "react"
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
                    <a className="card__play">
                        {props.featured ? <i>BOOK NOW</i> : <i>COMING SOON</i>}
                    </a>
                </div>
                <div className="card__content">
                    <h3 className="card__title">
                        <a>{props.movie.data.title}</a>
                    </h3>
                    <span className="card__category">
                        {props.movie.data.genres.map(genre => {
                            return <a>{genre.name}</a>
                        })} 
                    </span>
                    <span class="card__rate"><i className="icon ion-ios-star"></i>{props.movie.data.vote_average}</span>
                        <ul className="card__list">
                            <li>
                                <a>
                                    {props.data.filter(({api_ID}) => api_ID === props.movie.data.id)[0].rating}
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
        
    )
}