import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import Lines from '../../assets/images/circles.png'
import DummyChart from '../../assets/images/DummyCharts.png'
import '../profile/profile.css'
import './Agreements.css'

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
                      <div className='progressMain center'>
                        <svg width="42" className='progressMainLine' height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M32.7439 36.9001C32.9074 37.1218 32.8606 37.4345 32.635 37.5924C30.5173 39.0743 28.1304 40.1314 25.6065 40.7032C22.9204 41.3117 20.1374 41.3574 17.4328 40.8372C14.7282 40.3171 12.1606 39.2425 9.89185 37.6811C7.62307 36.1196 5.70226 34.1052 4.25043 31.7648C2.7986 29.4244 1.84722 26.8086 1.45622 24.0824C1.06523 21.3561 1.24309 18.5784 1.97862 15.9243C2.71414 13.2702 3.99137 10.7971 5.72985 8.66097C7.36335 6.65383 9.3708 4.985 11.6392 3.7461C11.8809 3.6141 12.1819 3.71113 12.3078 3.95604V3.95604C12.4337 4.20095 12.3369 4.50098 12.0954 4.6333C9.94933 5.80903 8.04991 7.39013 6.50334 9.29047C4.85178 11.3198 3.63841 13.6692 2.93966 16.1906C2.24092 18.712 2.07194 21.3508 2.44339 23.9408C2.81484 26.5308 3.71865 29.0157 5.09789 31.2391C6.47713 33.4625 8.3019 35.3762 10.4572 36.8595C12.6126 38.3429 15.0518 39.3638 17.6211 39.8579C20.1905 40.352 22.8344 40.3087 25.3862 39.7306C27.7757 39.1892 30.0361 38.1899 32.0428 36.7896C32.2686 36.632 32.5804 36.6785 32.7439 36.9001V36.9001Z" fill="white" stroke="#FFE6E6" stroke-width="0.999794" />
                          <path d="M11.5331 4.37683C11.3962 4.13788 11.4787 3.83261 11.721 3.70173C16.2176 1.27284 21.4824 0.659963 26.4267 2.00267C31.5317 3.389 35.8768 6.74647 38.5062 11.3365C41.1357 15.9265 41.8341 21.373 40.4478 26.478C39.1051 31.4223 35.9133 35.6539 31.5435 38.3042C31.3081 38.4471 31.003 38.3638 30.8661 38.1248V38.1248C30.7293 37.8859 30.8124 37.5817 31.0477 37.4386C35.188 34.9199 38.212 30.9057 39.4854 26.2166C40.8024 21.3669 40.1389 16.1927 37.6409 11.8322C35.1429 7.47169 31.0151 4.28209 26.1654 2.96508C21.4763 1.69169 16.4839 2.26975 12.2169 4.56734C11.9744 4.6979 11.67 4.61579 11.5331 4.37683V4.37683Z" fill="#8DE301" stroke="#8DE301" stroke-width="0.999794" />
                          <text x="13" y="19" fill="white" className='progressMainNumber'>4/5</text>
                          <text x="14" y="27" fill="white" className='progressMainText'>Owners</text>
                          <text x="11" y="32" fill="white" className='progressMainText'>percentage</text>
                        </svg>
                      </div>
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
                      <div className='progressMain center'>
                        <svg width="42" className='progressMainLine' height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M32.7439 36.9001C32.9074 37.1218 32.8606 37.4345 32.635 37.5924C30.5173 39.0743 28.1304 40.1314 25.6065 40.7032C22.9204 41.3117 20.1374 41.3574 17.4328 40.8372C14.7282 40.3171 12.1606 39.2425 9.89185 37.6811C7.62307 36.1196 5.70226 34.1052 4.25043 31.7648C2.7986 29.4244 1.84722 26.8086 1.45622 24.0824C1.06523 21.3561 1.24309 18.5784 1.97862 15.9243C2.71414 13.2702 3.99137 10.7971 5.72985 8.66097C7.36335 6.65383 9.3708 4.985 11.6392 3.7461C11.8809 3.6141 12.1819 3.71113 12.3078 3.95604V3.95604C12.4337 4.20095 12.3369 4.50098 12.0954 4.6333C9.94933 5.80903 8.04991 7.39013 6.50334 9.29047C4.85178 11.3198 3.63841 13.6692 2.93966 16.1906C2.24092 18.712 2.07194 21.3508 2.44339 23.9408C2.81484 26.5308 3.71865 29.0157 5.09789 31.2391C6.47713 33.4625 8.3019 35.3762 10.4572 36.8595C12.6126 38.3429 15.0518 39.3638 17.6211 39.8579C20.1905 40.352 22.8344 40.3087 25.3862 39.7306C27.7757 39.1892 30.0361 38.1899 32.0428 36.7896C32.2686 36.632 32.5804 36.6785 32.7439 36.9001V36.9001Z" fill="white" stroke="#FFE6E6" stroke-width="0.999794" />
                          <path d="M11.5331 4.37683C11.3962 4.13788 11.4787 3.83261 11.721 3.70173C16.2176 1.27284 21.4824 0.659963 26.4267 2.00267C31.5317 3.389 35.8768 6.74647 38.5062 11.3365C41.1357 15.9265 41.8341 21.373 40.4478 26.478C39.1051 31.4223 35.9133 35.6539 31.5435 38.3042C31.3081 38.4471 31.003 38.3638 30.8661 38.1248V38.1248C30.7293 37.8859 30.8124 37.5817 31.0477 37.4386C35.188 34.9199 38.212 30.9057 39.4854 26.2166C40.8024 21.3669 40.1389 16.1927 37.6409 11.8322C35.1429 7.47169 31.0151 4.28209 26.1654 2.96508C21.4763 1.69169 16.4839 2.26975 12.2169 4.56734C11.9744 4.6979 11.67 4.61579 11.5331 4.37683V4.37683Z" fill="#8DE301" stroke="#8DE301" stroke-width="0.999794" />
                          <text x="13" y="19" fill="white" className='progressMainNumber'>3/5</text>
                          <text x="14" y="27" fill="white" className='progressMainText'>Owners</text>
                          <text x="11" y="32" fill="white" className='progressMainText'>percentage</text>
                        </svg>
                      </div>
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
                    <div className='progressMain center'>
                        <svg width="42" className='progressMainLine' height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M32.7439 36.9001C32.9074 37.1218 32.8606 37.4345 32.635 37.5924C30.5173 39.0743 28.1304 40.1314 25.6065 40.7032C22.9204 41.3117 20.1374 41.3574 17.4328 40.8372C14.7282 40.3171 12.1606 39.2425 9.89185 37.6811C7.62307 36.1196 5.70226 34.1052 4.25043 31.7648C2.7986 29.4244 1.84722 26.8086 1.45622 24.0824C1.06523 21.3561 1.24309 18.5784 1.97862 15.9243C2.71414 13.2702 3.99137 10.7971 5.72985 8.66097C7.36335 6.65383 9.3708 4.985 11.6392 3.7461C11.8809 3.6141 12.1819 3.71113 12.3078 3.95604V3.95604C12.4337 4.20095 12.3369 4.50098 12.0954 4.6333C9.94933 5.80903 8.04991 7.39013 6.50334 9.29047C4.85178 11.3198 3.63841 13.6692 2.93966 16.1906C2.24092 18.712 2.07194 21.3508 2.44339 23.9408C2.81484 26.5308 3.71865 29.0157 5.09789 31.2391C6.47713 33.4625 8.3019 35.3762 10.4572 36.8595C12.6126 38.3429 15.0518 39.3638 17.6211 39.8579C20.1905 40.352 22.8344 40.3087 25.3862 39.7306C27.7757 39.1892 30.0361 38.1899 32.0428 36.7896C32.2686 36.632 32.5804 36.6785 32.7439 36.9001V36.9001Z" fill="white" stroke="#FFE6E6" stroke-width="0.999794" />
                          <path d="M11.5331 4.37683C11.3962 4.13788 11.4787 3.83261 11.721 3.70173C16.2176 1.27284 21.4824 0.659963 26.4267 2.00267C31.5317 3.389 35.8768 6.74647 38.5062 11.3365C41.1357 15.9265 41.8341 21.373 40.4478 26.478C39.1051 31.4223 35.9133 35.6539 31.5435 38.3042C31.3081 38.4471 31.003 38.3638 30.8661 38.1248V38.1248C30.7293 37.8859 30.8124 37.5817 31.0477 37.4386C35.188 34.9199 38.212 30.9057 39.4854 26.2166C40.8024 21.3669 40.1389 16.1927 37.6409 11.8322C35.1429 7.47169 31.0151 4.28209 26.1654 2.96508C21.4763 1.69169 16.4839 2.26975 12.2169 4.56734C11.9744 4.6979 11.67 4.61579 11.5331 4.37683V4.37683Z" fill="#8DE301" stroke="#8DE301" stroke-width="0.999794" />
                          <text x="13" y="19" fill="white" className='progressMainNumber'>2/5</text>
                          <text x="14" y="27" fill="white" className='progressMainText'>Owners</text>
                          <text x="11" y="32" fill="white" className='progressMainText'>percentage</text>
                        </svg>
                      </div>
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