import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import HeroSection from '../../components/hero/HeroSection'
import Cards from '../../components/cards/Cards'
import ContentMedia from '../../components/ContentMedia/ContentMedia'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import './home.css'
const home = () => {
  return (
    <>
      <main className='Homepage'>
        <Header />
        <div className='PageContainer'>
          <HeroSection />
          <Cards />
          <ContentMedia />
          <Subscribe />
          <Footer />
        </div>
      </main>

    </>
  )
}

export default home