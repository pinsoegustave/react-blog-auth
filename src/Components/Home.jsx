import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import Posts from './Posts'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Posts />
      <Footer />
    </div>
  )
}

export default Home