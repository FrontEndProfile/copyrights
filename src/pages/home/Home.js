import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import HeroSection from '../../components/hero/HeroSection'
import './home.css'
const home = () => {
  return (
    <>
      <main  className='Homepage'>
        <Header />
        <HeroSection />

      </main>

    </>
  )
}

export default home