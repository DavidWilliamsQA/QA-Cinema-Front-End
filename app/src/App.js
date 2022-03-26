import {useMemo, useEffect, useState} from "react"
import {BrowserRouter, Route, Router, Switch,Routes} from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Home"
import Gallery from "./Gallery"

export default function App() {
    // const [movieList, setMovieList] = useState([])
    // const [featuredMovies, setFeaturedMovies] = useState([])
    // const [upcomingMovies, setUpcomingMovies] = useState([])

    // useEffect(() => {
    //     axios.get(`https://qacinema-temi.herokuapp.com/movies/`)
    //     .then(res =>{
    //         setMovieList(res.data)
    //     })
    //     .catch((err) => console.log(err))
    // }, [])

    // useEffect(() => {
    //     setFeaturedMovies(() => {return movieList.filter(({ status }) => status === 'featured')})
    //     setUpcomingMovies(() => {return movieList.filter(({ status }) => status === 'upcoming')})
    // }, [movieList])

 
    return(

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/" element={<Home/>}/>

            </Routes>

            <Footer/>
        </BrowserRouter>
        
           
    )
}