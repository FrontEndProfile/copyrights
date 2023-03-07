import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import Lines from '../../assets/images/circles.png'
import DummyChart from '../../assets/images/DummyCharts.png'
import '../profile/profile.css'

const Detail = () => {
  return (
    <>
      <section className='detailPageLast'>
        <div className='viewPage'>
          <Header />
          <div className='PageContainer'>
            <section className='HeroComponent dataPage patch'>
              <div className='heroLines viewPageBlur'>
                <img className='img-fluid mw-100' src={Lines} alt='' />
              </div>

              <div className='container-xl position-relative AgreementDetailFix detailPage'>
                <div className='row justify-content-between'>
                  <div className='col-md-5'>
                    <h5 className='detailPageHead'>Agreement detail</h5>

                  </div>


                </div>
                <div class="row justify-content-center formGap">
                  <div class="col-md-5 formMain">
                    <label for="one" class="form-label">Agreement name</label>
                    <input type="text" class="form-control bg-transparent shadow-none" id='one' placeholder="First name" />
                  </div>
                  <div class="col-md-5 offset-lg-1 formMain">
                    <label for="one" class="form-label">Agreement name</label>
                    <input type="text" class="form-control bg-transparent shadow-none" id='one' placeholder="First name" />
                  </div>
                </div>

                <div class="row justify-content-center formGap">
                  <div class="col-md-11 formMainTextArea">
                    <label for="one" class="form-label">Agreement name</label>
                    <textarea class="form-control bg-transparent shadow-none p-5" rows='7' id='one'></textarea>
                  </div>
                </div>

              </div>

            </section>

          </div>
          <div className='container-fluid copyRightFooter '>
          <div className='row'>
            <div className='col-md-3 ms-auto justify-content-center'>
              <div className='d-flex justify-content-end flex-column align-content-center'>
                <p>Account Created 2023</p>
                <p>Copyright Agreements</p>
                <p>New Copyright Agreements</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </section>
    </>
  )
}

export default Detail