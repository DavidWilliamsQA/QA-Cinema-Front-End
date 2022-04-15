import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"
import Accordion from "./Components/Accordion";
import $ from 'jquery'

export default function Details() {
    const [movieInfo, setMovieInfo] = useState([])
    const [movieShowTime, setMovieShowTime] = useState([])
    const [movieInfoOmb, setMovieInfoOmb] = useState([])
    const [movieInfoVid, setMovieInfoVid] = useState([])
    const [movieDetails, setMovieDetails] = useState([])
    const [movieDetailsOmb, setMovieDetailsOmb] = useState([])
    const [movieDetailsVid, setMovieDetailsVid] = useState([])
    const [genre, setGenres] = useState([])
    const queryApiId = useQuery().get("api_id")
    const queryId = useQuery().get("id")
    const queryName = useQuery().get("name")

    useEffect(() =>{
                axios.get(`https://qacinema-temi.herokuapp.com/dbMovies/${queryApiId}`)
                        .then(res =>{
                            setMovieInfo(res.data)
                        })
                        .catch((err) => console.log(err))

                axios.get(`https://qacinema-temi.herokuapp.com/dbMovies/video/${queryApiId}`)
                        .then(res =>{
                            setMovieInfoVid(res.data.results[0])
                        })
                        .catch((err) => console.log(err))

                axios.get(`https://qacinema-temi.herokuapp.com/dbMovies/omb/${queryName}`)
                        .then(res =>{
                            setMovieInfoOmb(res.data)
                        })
                        .catch((err) => console.log(err))
                
                axios.get(`https://qacinema-temi.herokuapp.com/movies/${queryId}`)
                        .then(res =>{
                            setMovieShowTime(res.data[0].showTimes)
                        })
                        .catch((err) => console.log(err))
        },[])

    useEffect(() => {
        setMovieDetails(movieInfo)
    },[movieInfo])

    useEffect(() => {
        setMovieDetailsOmb(movieInfoOmb)
    },[movieInfoOmb])

    useEffect(() => {
        setMovieDetailsVid(movieInfoVid.key)
    },[movieInfoVid])

    useEffect(() => {
        if(movieDetails.length !== 0){
            setGenres(movieDetails.genres.map(genre => {return genre.name}))
        }
    },[movieDetails])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
    
      const detailStyle = {
        minHeight: '150px',
        maxHeight: '150px', 
        overflow: 'hidden',
      };
      

    return(
        
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h1 class="details__title">{movieDetails.title}</h1>
                    </div>

                    <div className="col-10">
                        <div className="card card--details card--series">
                            <div className="row">
                                
                                <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div className="card__cover">
                                        <img src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}/>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                                    <div className="card__content">
                                        <div className="card__wrap">

                                            <span className="card__rate"><i className="icon ion-ios-star"></i>{movieDetails.vote_average}</span>

                                            <ul className="card__list">
                                                <li><a style={{color: '#ff5860'}} id="screens" href="screens.html">HD</a></li>
                                            </ul>

                                        </div>

                                        <ul className="card__meta">
                                                <li><span>Genre:</span>{genre.map(genre => {
                                                    return <a>{genre}</a>
                                                })}</li> 

                                                    <a href="#" id="Genres"></a>
                                                    <li><span>Release date:</span> {movieDetails.release_date}</li>

                                                    <li><span>Running time:</span> {movieDetails.runtime} min</li>

                                                    <li>
                                                    <span>Country:</span>
                                                    <a href="#" id="Country">{movieDetailsOmb.Country}</a> 
                                                    </li>

                                                    <li>
                                                        <span>Director:</span> 
                                                        <a href="#" id="Director">{movieDetailsOmb.Director}</a> 
                                                    </li>

                                                    <li>
                                                        <span>Leading actors:</span> 
                                                        <a href="#" id="Actors">{movieDetailsOmb.Actors}</a> 
                                                    </li>
                                        </ul>


                                        <div className="b-description_readmore_wrapper js-description_readmore_wrapper">
                                            <div className="card__description card__description--details b-description_readmore_ellipsis" style={{detailStyle}}>
                                                {movieDetails.overview}
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-xl-6">
                        <iframe width="100%" height="100%" id="video"
                                src={`https://www.youtube.com/embed/${movieDetailsVid}`}>
                        </iframe>
				    </div>

                    <div class="col-12 col-xl-6">
                        <div class="accordion" id="accordion">
                            {
                                movieShowTime.map(time => {
                                    return <Accordion showTimes={time}/>
                                })
                            }
                            
                        </div>
				    </div>
                                        
                </div>
                
            </div>
	    
              
    )
}