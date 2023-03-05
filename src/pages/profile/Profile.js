import React from 'react'
import Header from '../../components/header/Header'
import './profile.css'

import Lines from '../../assets/images/circles.png'
import heroImage from '../../assets/images/hero-img.png'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <div className='viewPage'>
        <Header />
        <section className='HeroComponent dataPage'>
          <div className='heroLines'>
            <img className='img-fluid mw-100' src={Lines} alt='' />
          </div>

          <div className='container-xl position-relative'>
            <div className='row profileRow'>
              <div className='col-md-6'>
                <h1>Profile</h1>
                <p>More than 400+ new members</p>
              </div>
              <div className='col-md-6'>
                <Link to='#' className='ui_btn addProfileLayout'>Add Profiles</Link>
              </div>
            </div>
          </div>


        </section>
      </div>

    </>
  )
}

export default Profile