import React from 'react'
import Header from '../../components/header/Header'
import Lines from '../../assets/images/circles.png'
import VectorDummy from '../../assets/images/VectorDummy.png'
import '../profile/profile.css'
import './AgreementDetail.css'
const AgreementDetail = () => {
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
                <div className='col'>
                  <h1>Create New Copyright Agreements</h1>
                  <p>Creare New Copyright Agreements</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mx-auto'>
                  <div className='text-white myForm'>
                    <form className='w-100'>
                      <div className="w-100">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="email" className="form-control bg-transparent customInput" id="name" />
                      </div>
                      <div className="w-100 myDropdown">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item position-relative">
                            <h2 className="accordion-header border border-0" id="headingOne">
                              <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <input className='form-control bg-transparent shadow-none border border-0' type='text' placeholder='Search Owners' />
                              </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body position-absolute">

                                <div className='dropRow'>
                                  <div className='dropRowContent'>
                                    <div className='dropRowContentImg'>
                                      <img className='img-fluid' src={VectorDummy} alt='' />
                                    </div>

                                    <div className='dropRowContentTittle'>Brad Simmons</div>

                                  </div>
                                  <div className='dropRowProgress'>
                                    <div className='progressMain'>
                                      <svg width="42" className='progressMainLine' height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.7439 36.9001C32.9074 37.1218 32.8606 37.4345 32.635 37.5924C30.5173 39.0743 28.1304 40.1314 25.6065 40.7032C22.9204 41.3117 20.1374 41.3574 17.4328 40.8372C14.7282 40.3171 12.1606 39.2425 9.89185 37.6811C7.62307 36.1196 5.70226 34.1052 4.25043 31.7648C2.7986 29.4244 1.84722 26.8086 1.45622 24.0824C1.06523 21.3561 1.24309 18.5784 1.97862 15.9243C2.71414 13.2702 3.99137 10.7971 5.72985 8.66097C7.36335 6.65383 9.3708 4.985 11.6392 3.7461C11.8809 3.6141 12.1819 3.71113 12.3078 3.95604V3.95604C12.4337 4.20095 12.3369 4.50098 12.0954 4.6333C9.94933 5.80903 8.04991 7.39013 6.50334 9.29047C4.85178 11.3198 3.63841 13.6692 2.93966 16.1906C2.24092 18.712 2.07194 21.3508 2.44339 23.9408C2.81484 26.5308 3.71865 29.0157 5.09789 31.2391C6.47713 33.4625 8.3019 35.3762 10.4572 36.8595C12.6126 38.3429 15.0518 39.3638 17.6211 39.8579C20.1905 40.352 22.8344 40.3087 25.3862 39.7306C27.7757 39.1892 30.0361 38.1899 32.0428 36.7896C32.2686 36.632 32.5804 36.6785 32.7439 36.9001V36.9001Z" fill="white" stroke="#FFE6E6" strokeWidth="0.999794" />
                                        <path d="M11.5331 4.37683C11.3962 4.13788 11.4787 3.83261 11.721 3.70173C16.2176 1.27284 21.4824 0.659963 26.4267 2.00267C31.5317 3.389 35.8768 6.74647 38.5062 11.3365C41.1357 15.9265 41.8341 21.373 40.4478 26.478C39.1051 31.4223 35.9133 35.6539 31.5435 38.3042C31.3081 38.4471 31.003 38.3638 30.8661 38.1248V38.1248C30.7293 37.8859 30.8124 37.5817 31.0477 37.4386C35.188 34.9199 38.212 30.9057 39.4854 26.2166C40.8024 21.3669 40.1389 16.1927 37.6409 11.8322C35.1429 7.47169 31.0151 4.28209 26.1654 2.96508C21.4763 1.69169 16.4839 2.26975 12.2169 4.56734C11.9744 4.6979 11.67 4.61579 11.5331 4.37683V4.37683Z" fill="#8DE301" stroke="#8DE301" strokeWidth="0.999794" />
                                        <text x="13" y="19" fill="white" className='progressMainNumber'>4/5</text>
                                        <text x="14" y="27" fill="white" className='progressMainText'>Owners</text>
                                        <text x="11" y="32" fill="white" className='progressMainText'>percentage</text>
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                                <div className='dropRow'>
                                  <div className='dropRowContent'>
                                    <div className='dropRowContentImg'>
                                      <img className='img-fluid' src={VectorDummy} alt='' />
                                    </div>

                                    <div className='dropRowContentTittle'>Brad Simmons</div>

                                  </div>
                                  <div className='dropRowProgress'>
                                    <div className='progressMain'>
                                      <svg width="42" className='progressMainLine' height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.7439 36.9001C32.9074 37.1218 32.8606 37.4345 32.635 37.5924C30.5173 39.0743 28.1304 40.1314 25.6065 40.7032C22.9204 41.3117 20.1374 41.3574 17.4328 40.8372C14.7282 40.3171 12.1606 39.2425 9.89185 37.6811C7.62307 36.1196 5.70226 34.1052 4.25043 31.7648C2.7986 29.4244 1.84722 26.8086 1.45622 24.0824C1.06523 21.3561 1.24309 18.5784 1.97862 15.9243C2.71414 13.2702 3.99137 10.7971 5.72985 8.66097C7.36335 6.65383 9.3708 4.985 11.6392 3.7461C11.8809 3.6141 12.1819 3.71113 12.3078 3.95604V3.95604C12.4337 4.20095 12.3369 4.50098 12.0954 4.6333C9.94933 5.80903 8.04991 7.39013 6.50334 9.29047C4.85178 11.3198 3.63841 13.6692 2.93966 16.1906C2.24092 18.712 2.07194 21.3508 2.44339 23.9408C2.81484 26.5308 3.71865 29.0157 5.09789 31.2391C6.47713 33.4625 8.3019 35.3762 10.4572 36.8595C12.6126 38.3429 15.0518 39.3638 17.6211 39.8579C20.1905 40.352 22.8344 40.3087 25.3862 39.7306C27.7757 39.1892 30.0361 38.1899 32.0428 36.7896C32.2686 36.632 32.5804 36.6785 32.7439 36.9001V36.9001Z" fill="white" stroke="#FFE6E6" strokeWidth="0.999794" />
                                        <path d="M11.5331 4.37683C11.3962 4.13788 11.4787 3.83261 11.721 3.70173C16.2176 1.27284 21.4824 0.659963 26.4267 2.00267C31.5317 3.389 35.8768 6.74647 38.5062 11.3365C41.1357 15.9265 41.8341 21.373 40.4478 26.478C39.1051 31.4223 35.9133 35.6539 31.5435 38.3042C31.3081 38.4471 31.003 38.3638 30.8661 38.1248V38.1248C30.7293 37.8859 30.8124 37.5817 31.0477 37.4386C35.188 34.9199 38.212 30.9057 39.4854 26.2166C40.8024 21.3669 40.1389 16.1927 37.6409 11.8322C35.1429 7.47169 31.0151 4.28209 26.1654 2.96508C21.4763 1.69169 16.4839 2.26975 12.2169 4.56734C11.9744 4.6979 11.67 4.61579 11.5331 4.37683V4.37683Z" fill="#8DE301" stroke="#8DE301" strokeWidth="0.999794" />
                                        <text x="13" y="19" fill="white" className='progressMainNumber'>4/5</text>
                                        <text x="14" y="27" fill="white" className='progressMainText'>Owners</text>
                                        <text x="11" y="32" fill="white" className='progressMainText'>percentage</text>
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                                <div className='dropRow'>
                                  <div className='dropRowContent'>
                                    <div className='dropRowContentImg'>
                                      <img className='img-fluid' src={VectorDummy} alt='' />
                                    </div>

                                    <div className='dropRowContentTittle'>Brad Simmons</div>

                                  </div>
                                  <div className='dropRowProgress'>
                                    <div className='progressMain'>
                                      <svg width="42" className='progressMainLine' height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.7439 36.9001C32.9074 37.1218 32.8606 37.4345 32.635 37.5924C30.5173 39.0743 28.1304 40.1314 25.6065 40.7032C22.9204 41.3117 20.1374 41.3574 17.4328 40.8372C14.7282 40.3171 12.1606 39.2425 9.89185 37.6811C7.62307 36.1196 5.70226 34.1052 4.25043 31.7648C2.7986 29.4244 1.84722 26.8086 1.45622 24.0824C1.06523 21.3561 1.24309 18.5784 1.97862 15.9243C2.71414 13.2702 3.99137 10.7971 5.72985 8.66097C7.36335 6.65383 9.3708 4.985 11.6392 3.7461C11.8809 3.6141 12.1819 3.71113 12.3078 3.95604V3.95604C12.4337 4.20095 12.3369 4.50098 12.0954 4.6333C9.94933 5.80903 8.04991 7.39013 6.50334 9.29047C4.85178 11.3198 3.63841 13.6692 2.93966 16.1906C2.24092 18.712 2.07194 21.3508 2.44339 23.9408C2.81484 26.5308 3.71865 29.0157 5.09789 31.2391C6.47713 33.4625 8.3019 35.3762 10.4572 36.8595C12.6126 38.3429 15.0518 39.3638 17.6211 39.8579C20.1905 40.352 22.8344 40.3087 25.3862 39.7306C27.7757 39.1892 30.0361 38.1899 32.0428 36.7896C32.2686 36.632 32.5804 36.6785 32.7439 36.9001V36.9001Z" fill="white" stroke="#FFE6E6" strokeWidth="0.999794" />
                                        <path d="M11.5331 4.37683C11.3962 4.13788 11.4787 3.83261 11.721 3.70173C16.2176 1.27284 21.4824 0.659963 26.4267 2.00267C31.5317 3.389 35.8768 6.74647 38.5062 11.3365C41.1357 15.9265 41.8341 21.373 40.4478 26.478C39.1051 31.4223 35.9133 35.6539 31.5435 38.3042C31.3081 38.4471 31.003 38.3638 30.8661 38.1248V38.1248C30.7293 37.8859 30.8124 37.5817 31.0477 37.4386C35.188 34.9199 38.212 30.9057 39.4854 26.2166C40.8024 21.3669 40.1389 16.1927 37.6409 11.8322C35.1429 7.47169 31.0151 4.28209 26.1654 2.96508C21.4763 1.69169 16.4839 2.26975 12.2169 4.56734C11.9744 4.6979 11.67 4.61579 11.5331 4.37683V4.37683Z" fill="#8DE301" stroke="#8DE301" strokeWidth="0.999794" />
                                        <text x="13" y="19" fill="white" className='progressMainNumber'>4/5</text>
                                        <text x="14" y="27" fill="white" className='progressMainText'>Owners</text>
                                        <text x="11" y="32" fill="white" className='progressMainText'>percentage</text>
                                      </svg>
                                    </div>
                                  </div>
                                </div>


                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="w-100">
                        <label htmlFor="name" className="form-label">Description</label>
                        <textarea className='form-control w-100 bg-transparent' rows={10}></textarea>
                      </div>
                      <div className="w-100">
                        <div class="file uploadBtn btn d-flex align-items-center justify-content-center">
                          <div className='uploadBtnOverLay'>
                            <span>
                              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 16H5.5C3.98333 16 2.68733 15.475 1.612 14.425C0.536667 13.375 -0.000666047 12.0917 6.19579e-07 10.575C6.19579e-07 9.275 0.391667 8.11667 1.175 7.1C1.95833 6.08333 2.98333 5.43333 4.25 5.15C4.66667 3.61667 5.5 2.375 6.75 1.425C8 0.475 9.41667 0 11 0C12.95 0 14.6043 0.679333 15.963 2.038C17.3217 3.39667 18.0007 5.05067 18 7C19.15 7.13333 20.1043 7.62933 20.863 8.488C21.6217 9.34667 22.0007 10.3507 22 11.5C22 12.75 21.5623 13.8127 20.687 14.688C19.8117 15.5633 18.7493 16.0007 17.5 16H12V8.85L13.6 10.4L15 9L11 5L7 9L8.4 10.4L10 8.85V16Z" fill="white" />
                              </svg>

                            </span>
                            Upload
                          </div>
                          <input type="file" name="file" />
                        </div>
                      </div>


                      <button type="submit" className="fillBtn mb-5">Submit</button>
                    </form>



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

export default AgreementDetail


