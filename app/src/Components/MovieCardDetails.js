import {useEffect, useState} from "react"
import MovieGalleryCards from "./MovieGalleryCard"
import axios from "axios"
import "../css/style.css"
import "../css/bootstrap-grid.min.css"
import "../css/ionicons.min.css"
import "../css/plyr.css"

export default function MovieCardDetails({data}){
    const [movies, setMovies] = useState([])
    const [movieApiId, setMovieApiId] = useState([])

    useEffect(() => {
        setMovieApiId (data.map(i =>{return i.api_ID}))
    }, [data])

    useEffect(() => {
        axios.all(movieApiId.map(l => axios.get(`https://qacinema-temi.herokuapp.com/dbMovies/${l}`)))
        .then(axios.spread(function (...res){
            setMovies(res)
        }))
        .catch((err) => console.log(err))
    }, [movieApiId]) 


    return (
            <div className="catalog">
		        <div className="container">
			        <div className="row">
                        {
                            movies.map(movie => {
                                return <MovieGalleryCards movie={movie} data={data}/>
                            })
                        }
                    </div>
                </div>
            </div>
                
    )
}