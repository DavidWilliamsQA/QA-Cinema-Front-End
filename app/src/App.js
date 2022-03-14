import React from "react"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import FeaturedMovies from "./Components/FeaturedMovies"
import featuredMovieData from "./featuredMovieData"

export default function App() {
    const movieElements = featuredMovieData.map(movie =>{
        return <FeaturedMovies movie={movie} />
    })
    return(
        <div>
            <Navbar />
            <section className="home">
                <div className="container">
                    <div className="row">
                        {movieElements}
                    </div>      
                </div>
            </section>
            <Main />
        </div>
    )
}