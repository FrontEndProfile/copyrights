import React from 'react'
import Header from '../../components/header/Header'
import './profile.css'

import Lines from '../../assets/images/circles.png'
import heroImage from '../../assets/images/hero-img.png'

const Profile = () => {
  return (
    <>
      <div className='viewPage'>
        <Header />
        <section className='HeroComponent'>
          <div className='heroLines'>
            <img className='img-fluid mw-100' src={Lines} alt='' />
          </div>

          <div className='container-xl position-relative'>
            <div className='row HeroContent'>
              <div className='col-md-12'>
              
              </div>
            </div>
          </div>


        </section>
      </div>

    </>
  )
}

export default Profile