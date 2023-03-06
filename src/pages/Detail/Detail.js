import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import Lines from '../../assets/images/circles.png'
import DummyChart from '../../assets/images/DummyCharts.png'
import '../profile/profile.css'

const Detail = () => {
  return (
    <>
    <section className=''>
    <div className='viewPage'>
        <Header />
        <div className='PageContainer'>
          <section className='HeroComponent dataPage'>
            <div className='heroLines viewPageBlur'>
              <img className='img-fluid mw-100' src={Lines} alt='' />
            </div>

            <div className='container-xl position-relative AgreementDetailFix detailPage'>
              <div className='row justify-content-between'>
                <div className='col-md-5'>
                    <h5>Agreement Name</h5>

                </div>
                <div className='col-md-5'></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    </>
  )
}

export default Detail