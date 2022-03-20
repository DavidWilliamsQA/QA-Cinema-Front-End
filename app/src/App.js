import {useMemo, useEffect, useState} from "react"
import Index from "./Components/Index"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import axios from "axios"

export default function App() {
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
        <body>
            <Header />
            <Index data={featuredMovies} title="FEATURED MOVIES" featured={true}/>
            <Index data={upcomingMovies} title="COMING SOON" />

            <Footer/>
        </body>
        
           
    )
}