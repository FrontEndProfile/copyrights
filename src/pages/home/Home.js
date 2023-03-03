import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import HeroSection from '../../components/hero/HeroSection'
import Cards from '../../components/cards/Cards'
import ContentMedia from '../../components/ContentMedia/ContentMedia'
import './home.css'
const home = () => {
  return (
    <>
      <main  className='Homepage'>
        <Header />
        <HeroSection />
        <Cards />
        <ContentMedia />
      </main>

    </>
  )
}

export default home