import React from "react"
import Index from "./Components/Index"
import axios from "axios"

export default function App() {
    const [movieList, setMovieList] = React.useState([])
    let featured = []
    let coming = []
    let showing = []

    React.useEffect(() => {
        console.log("Ran App Effects")
        axios.get(`https://qacinema-temi.herokuapp.com/movies/`)
        .then(res =>{
            setMovieList(res.data)
        })
    }, [])

 
    return(
        <div>
             {movieList.map(movie =>{
            if(movie.status === 'featured'){
                featured.push(movie.api_ID)
            } else if (movie.status === 'upcoming'){
                coming.push(movie.api_ID)
            } else{
                showing.push(movie.api_ID)
            }
            })}
        
        <Index featured={featured} coming={coming} showing={showing}/>
        </div>
        
           
    )
}