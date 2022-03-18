import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MovieCard from "./MovieCard"
import axios from "axios"

export default function Index(props) {
    const [featuredMovies, setFeaturedMovies] = React.useState([])
    const [comingMovies, setComingMovies] = React.useState([])
    const featured = [419704,338762,495764,38700,454626,475557]
    const coming = [400160,514847,556678,508439,524047,572751]
    


    React.useEffect(() => {
        console.log("Ran Effect")

        axios.all(featured.map(l => axios.get(`https://qacinema-temi.herokuapp.com/dbMovies/${l}`)))
        .then(axios.spread(function (...res){
            setFeaturedMovies(res)
        }))
        .catch((err) => console.log(err))

        axios.all(coming.map(l => axios.get(`https://qacinema-temi.herokuapp.com/dbMovies/${l}`)))
        .then(axios.spread(function (...res){
            setComingMovies(res)
        }))
        .catch((err) => console.log(err))

    }, []) 


    return(
        <body>
            <Header />
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a className="home__title">FEATURED MOVIES</a>
                        </div>
                        
                        { featuredMovies.map(movie =>{
                return <MovieCard movie={movie} featured={true} />
                        }) }
                        {console.log(props.featured)}

                    </div>     
                </div>
            </section>


            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a className="home__title">COMING SOON</a>
                        </div>
                        { comingMovies.map(movie =>{
                return <MovieCard movie={movie} featured={false} />
                        })}
                    </div>      
                </div>
            </section>
            
            <Footer/>
        </body>
    )
}