import React from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Slider from '../components/slider'
import MovieList from '../components/movieList'

export default function Home() {
  return (
    <div>
<Header/>

<Slider/>
<MovieList/>

<Footer/>
    </div>
  )
}
