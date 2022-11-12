import React from 'react'
import HomeSection from './HomeSection'
import HomeAbout from './HomeAbout'
import HomePackages from './HomePackages'
import Offer from './Offer'
import Services from './Services'

function Home() {
  return (
    <>
    <HomeSection/>
    <Services/>
    <HomeAbout/>
    <HomePackages/>
    <Offer/>
    </>
  )
}

export default Home