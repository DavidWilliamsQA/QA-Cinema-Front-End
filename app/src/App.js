import React from "react"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import FeaturedMovies from "./Components/FeaturedMovies"
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return(
        <div>
            <Navbar />
            <FeaturedMovies 
            img="https://image.tmdb.org/t/p/original/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg"
            title="Jumanji: The Next Level"
            releaseDate = "2019-12-04"
            rating = "7.0"
            />
            <FeaturedMovies img="https://image.tmdb.org/t/p/original/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg"
            title="Sonic the Hedgehog"
            releaseDate = "2020-02-12"
            rating = "7.4"/>
            <FeaturedMovies
            img="https://image.tmdb.org/t/p/original/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg"
            title="Bad Boys for Life"
            releaseDate = "2020-01-15"
            rating = "7.2"/>
            <Main />
        </div>
    )
}