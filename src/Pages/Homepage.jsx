import React from 'react'
import Fetching from '../Components/Fetching'
import Image from '../Components/Image'
import Navbar from '../Components/Navbar'
import Nowaabout from '../Components/Nowaabout'
import Whyhydro from '../Components/Whyhydro'
import Footer from '../Footer/Footer'

const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <Whyhydro/>
    <Image/>
    <Nowaabout/>
    <Fetching/>
    <Footer/>
    </div>
  )
}

export default Homepage
