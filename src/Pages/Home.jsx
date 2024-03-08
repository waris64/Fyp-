import React from 'react'
import Nav from '../Components/Nav'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import Rectangle from '../assets/Rectangle 10.png'
const Home = () => {
  return (
    <>
      <Nav logoSrc={Rectangle}/>
      <Main />
      <Footer />
    </>
  )
}

export default Home