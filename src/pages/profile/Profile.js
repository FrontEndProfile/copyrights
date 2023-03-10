import React from 'react'
import Header from '../../components/header/Header'
import './profile.css'

import Lines from '../../assets/images/circles.png'
import Vector from '../../assets/images/VectorDummy.png'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <div className='viewPage'>
        <Header />
        <div className='PageContainer'>
          <section className='HeroComponent dataPage'>
            <div className='heroLines viewPageBlur'>
              <img className='img-fluid mw-100' src={Lines} alt='' />
            </div>

            <div className='container-xl position-relative dataPageWidth'>
              <div className='row profileRow'>
                <div className='col-md-6'>
                  <h1>Profile</h1>
                  <p>More than 400+ new members</p>
                </div>
                <div className='col-md-6'>
                  <Link to='#' className='ui_btn addProfileLayout'>Add Profiles</Link>
                </div>
              </div>
              {/* Custom Table */}
              <div className='customTableLayout'>
                <div className='customTableHead'>
                  <div className='row justify-content-between'>
                    <div className='col-3'>
                      <h6>Name</h6>
                    </div>
                    <div className='col-2'>
                      <h6>Wallet Address</h6>
                    </div>
                    <div className='col-2'>
                      <h6>Role</h6>
                    </div>
                    <div className='col-2'>
                      <h6>Domicile</h6>
                    </div>
                    <div className='col-xxl-1 col-2'>
                      <h6>Date of Birth</h6>
                    </div>
                    <div className='col-1'>
                      <h6 className='justify-content-center'>Action</h6>
                    </div>

                  </div>
                </div>

                <div className='customTableDataRow'>
                  <div className='row customTableDataGap'>
                    <div className='col-3 d-flex align-items-center'>
                      <img className='vectorDummy' src={Vector} alt='' />
                      <p>Brad Simmons</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p className='walletText'>0xNNN.......NNMHN</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>Song writer</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>America</p>
                    </div>
                    <div className='col-xxl-1 col-2 d-flex align-items-center noFix'>
                      <p>14-07-1952</p>
                    </div>
                    <div className='col-1 d-flex align-items-center'>
                      <Link to='#' className='justify-content-center editBtn'>Edit</Link>
                    </div>

                  </div>
                </div>

                <div className='customTableDataRow'>
                  <div className='row customTableDataGap'>
                    <div className='col-3 d-flex align-items-center'>
                      <img className='vectorDummy' src={Vector} alt='' />
                      <p>Brad Simmons</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p className='walletText'>0xNNN.......NNMHN</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>Song writer</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>America</p>
                    </div>
                    <div className='col-xxl-1 col-2 d-flex align-items-center noFix'>
                      <p>14-07-1952</p>
                    </div>
                    <div className='col-1 d-flex align-items-center'>
                      <Link to='#' className='justify-content-center editBtn'>Edit</Link>
                    </div>

                  </div>
                </div>

                <div className='customTableDataRow'>
                  <div className='row customTableDataGap'>
                    <div className='col-3 d-flex align-items-center'>
                      <img className='vectorDummy' src={Vector} alt='' />
                      <p>Brad Simmons</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p className='walletText'>0xNNN.......NNMHN</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>Song writer</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>America</p>
                    </div>
                    <div className='col-xxl-1 col-2 d-flex align-items-center noFix'>
                      <p>14-07-1952</p>
                    </div>
                    <div className='col-1 d-flex align-items-center'>
                      <Link to='#' className='justify-content-center editBtn'>Edit</Link>
                    </div>

                  </div>
                </div>


              </div>
            </div>


          </section>
        </div>
      </div>

    </>
  )
}

export default Profile