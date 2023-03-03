import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import HeroSection from '../../components/hero/HeroSection'
import Cards from '../../components/cards/Cards'
import './home.css'
const home = () => {
  return (
    <>
      <main  className='Homepage'>
        <Header />
        <HeroSection />
        <Cards/>
      </main>

    </>
  )
}

export default home