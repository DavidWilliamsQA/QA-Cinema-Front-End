import {BrowserRouter, Route,Routes} from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import BannerTop from "./Components/BannerTop"
import Home from "./Home"
import Gallery from "./Gallery"
import FilterTop from "./Components/FilterTop"

export default function App() {
 
    return(

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                {/* <Route path="/gallery" element={<BannerTop/>}/> */}
                <Route path="/gallery" element={<>
                <BannerTop title={"NOW SHOWING"}/>
                <FilterTop/>
                <Gallery/>
                </>}/>
                {/* <Route path="/" element={<Home/>}/> */}

            </Routes>

            <Footer/>
        </BrowserRouter>
        
           
    )
}