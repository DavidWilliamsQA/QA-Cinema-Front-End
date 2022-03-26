import {useMemo, useEffect, useState} from "react"
import MovieCardDetails from "./Components/MovieCardDetails"
import Index from "./Components/Index"
import axios from "axios"
// import "./css/style.css"

export default function Gallery() {
    const [movieList, setMovieList] = useState([])
    const [featuredMovies, setFeaturedMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
        axios.get(`https://qacinema-temi.herokuapp.com/movies/`)
        .then(res =>{
            setMovieList(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        setFeaturedMovies(() => {return movieList.filter(({ status }) => status === 'featured')})
        setUpcomingMovies(() => {return movieList.filter(({ status }) => status === 'upcoming')})
    }, [movieList])

 
    return(
    <div>
        <div style={{padding: "50px 0 50px 0"}}>
        </div>
        <MovieCardDetails data={featuredMovies}/>
        <Index data={upcomingMovies} title="COMING SOON" />
	</div>

              
    )
}