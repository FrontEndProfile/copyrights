import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import Lines from '../../assets/images/circles.png'
import DummyChart from '../../assets/images/DummyCharts.png'
import '../profile/profile.css'

const Agreements = () => {
  return (
    <>
      <div className='viewPage'>
        <Header />
        <div className='PageContainer'>
          <section className='HeroComponent dataPage'>
            <div className='heroLines viewPageBlur'>
              <img className='img-fluid mw-100' src={Lines} alt='' />
            </div>

            <div className='container-xl position-relative AgreementDetailFix'>
              <div className='row profileRow'>
                <div className='col-md-6'>
                  <h1>Copyright Agreements</h1>
                  <p>More than 40+ new Copyright Agreements</p>
                </div>
                <div className='col-md-6'>
                  <Link to='/AgreementDetail' className='ui_btn addProfileLayout'>Add New</Link>
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
                      <h6>Status</h6>
                    </div>
                    <div className='col-2'>
                      <h6>Owners</h6>
                    </div>
                    <div className='col-2'>
                      <h6>Number of signatures</h6>
                    </div>
                    <div className='col-1'>
                      <h6 className='justify-content-center'>Action</h6>
                    </div>

                  </div>
                </div>

                <div className='customTableDataRow'>
                  <div className='row customTableDataGap'>
                    <div className='col-3 d-flex align-items-center'>
                      <p>Agreement Name</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p className='walletText'>Pending</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>Mudassir Mehdi</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <img className='img-fluid w-75' src={DummyChart} alt='' />
                    </div>

                    <div className='col-1 d-flex align-items-center'>
                      <Link to='#' className='justify-content-center editBtn'>View</Link>
                    </div>

                  </div>
                </div>

                <div className='customTableDataRow'>
                  <div className='row customTableDataGap'>
                    <div className='col-3 d-flex align-items-center'>
                      <p>Agreement Name</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p className='walletText'>Pending</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>Mudassir Mehdi</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <img className='img-fluid w-75' src={DummyChart} alt='' />
                    </div>

                    <div className='col-1 d-flex align-items-center'>
                      <Link to='#' className='justify-content-center editBtn'>View</Link>
                    </div>

                  </div>
                </div>

                <div className='customTableDataRow'>
                  <div className='row customTableDataGap'>
                    <div className='col-3 d-flex align-items-center'>
                      <p>Agreement Name</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p className='walletText'>Pending</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <p>Mudassir Mehdi</p>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                      <img className='img-fluid w-75' src={DummyChart} alt='' />
                    </div>

                    <div className='col-1 d-flex align-items-center'>
                      <Link to='#' className='justify-content-center editBtn'>View</Link>
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

export default Agreements