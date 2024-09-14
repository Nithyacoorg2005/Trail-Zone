import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import ContactPage from './Components/Contact/ContactPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TrailerPage from './Components/Trailer/TrailerPage'
import MoviePage from './Components/Movies/MoviePage'
import TvShowPage from './Components/tvShowPage/TvShowPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<ContactPage/>}/>
      <Route path="/trailers" element={<TrailerPage/>}/>
      <Route path="/movies" element={<MoviePage/>}/>
      <Route path="/tvshows" element={<TvShowPage/>}/>
    </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
