import React from 'react'
import MainPage from './MainPAge'
import About from './About'
import ServicesCards from './ServicesCards'
import Mern from './Mern'
function Home() {
  return (
    <div>
          <MainPage />
          <About />
      <ServicesCards />
      <Mern/>
    </div>
  )
}

export default Home
