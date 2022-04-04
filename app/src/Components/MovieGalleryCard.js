import React from "react"
import "../css/style.css"
import "../css/bootstrap-grid.min.css"
import "../css/ionicons.min.css"
import "../css/plyr.css"

export default function MovieGalleryCard(props){


    return (
        <div className="col-6 col-sm-12 col-lg-6">
            <div className="card card--list">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="card__cover">
                            <img src={`https://image.tmdb.org/t/p/original${props.movie.data.poster_path}`} alt="" />
                            <a className="card__play">
                            <i className="icon ion-ios-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8">
                        <div className="card__content">
                            <h3 className="card__title"><a>{props.movie.data.title}</a></h3>
                            <span className="card__category">
                                {props.movie.data.genres.map(genre => {
                                    return <a>{genre.name}</a>
                                })}  
                            </span>
                            <div className="card__wrap">
                                <span className="card__rate"><i className="icon ion-ios-star"></i>{props.movie.data.vote_average}</span>
                                <ul className="card__list">
                                    <li>{props.movie.data.release_date}</li>
                                    <li><a>{props.data.filter(({api_ID}) => api_ID === props.movie.data.id)[0].rating}</a></li>
                                </ul>
                            </div>
                            <div className="card__description">
                                <p>{props.movie.data.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}