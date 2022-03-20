import {useMemo, useEffect, useState} from "react"
import MovieCard from "./MovieCard"
import axios from "axios"

export default function Index({ data, title, featured=false}) {
    const [featuredMovies, setFeaturedMovies] = useState([])
    const [movieApiId, setMovieApiId] = useState([])

    useEffect(() => {
        setMovieApiId (data.map(i =>{return i.api_ID}))
    }, [data])

    useEffect(() => {
        axios.all(movieApiId.map(l => axios.get(`https://qacinema-temi.herokuapp.com/dbMovies/${l}`)))
        .then(axios.spread(function (...res){
            setFeaturedMovies(res)
        }))
        .catch((err) => console.log(err))
    }, [movieApiId]) 


    return(
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a className="home__title">{title}</a>
                        </div>
                        { featuredMovies.map(movie =>{
                return <MovieCard movie={movie} featured={featured} data={data}/>
                        }) }

                    </div>     
                </div>
            </section>            
    )
}