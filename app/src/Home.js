import {useMemo, useEffect, useState} from "react"
import Index from "./Components/Index"
import axios from "axios"

export default function Home() {
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
            <Index data={featuredMovies} title="FEATURED MOVIES" featured={true}/>
            <Index data={upcomingMovies} title="COMING SOON" />
        </div>
              
    )
}