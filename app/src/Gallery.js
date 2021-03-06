import {useEffect, useState} from "react"
import MovieCardDetails from "./Components/MovieCardDetails"
import Index from "./Components/Index"
import axios from "axios"

export default function Gallery() {
    const [movieList, setMovieList] = useState([])
    const [featuredMovies, setFeaturedMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
        axios.get(`https://qacinema-temi.herokuapp.com/movies/`)
        .then(res =>{
            setMovieList(res.data)
            console.log(movieList)
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        setFeaturedMovies(() => {return movieList.filter(({ status }) => status === 'featured')})
        setUpcomingMovies(() => {return movieList.filter(({ status }) => status === 'upcoming')})
    }, [movieList])

 
    return(
        <div className="catalog">
            <div className="container">
                <MovieCardDetails data={featuredMovies}/>
                <Index data={upcomingMovies} title="COMING SOON" />
            </div>
	    </div>

              
    )
}