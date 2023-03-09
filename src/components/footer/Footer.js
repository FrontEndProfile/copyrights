import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/arrow.png'



const Footer = () => {
  return (
    <>
      <footer className="">
        <div className='container-xl'>
          <div className="row justify-content-between">
            <div className="col-md-4 pe-lg-5 mb-3 order-md-1 order-3">
              <form>
                <p className='footerContent'>Welcome to Copyright Wallet, your trusted partner in copyright protection. We understand that as a creator, your intellectual property is incredibly valuable, and it's important to ensure that it remains safe and secure. That's where Copyright Wallet comes in.</p>
                <p className='footerContent signUpText'>Sign up to get the latest  news, discounts, and more.</p>

                <div className="d-flex flex-column flex-sm-row gap-2 footerForm">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control bg-transparent" placeholder="Email address" />
                  <button className="btn p-0 m-0 footerFormBtn" type="button">
                    <img src={arrow} alt='' />
                  </button>
                </div>
                <p className='copyRight'>© 2023 Sitename Inc | All Rights Reserved | Designed By Yawar Lodhi</p>
              </form>
            </div>

            <div className="col-3 col-md-2 offset-xl-1 mb-3 footerSubTitle order-md-2 order-1">
              <h5>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item"><Link to="#" className="nav-link p-0">About</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link p-0">Careers</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link p-0">Press</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link p-0">News</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link p-0">Merch</Link></li>
              </ul>
            </div>

            <div className="col-8 col-xl-3 col-md-4 offset-xl-2 mb-3 footerSubTitle order-md-3 order-2">
              <h5>Copyright Agreements</h5>
              <ul className="nav flex-column">
                <li className="nav-item"><Link to="#" className="nav-link p-0">Create New Copyright Agreements</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link p-0">CoinFlip Biometrics Privacy Policy</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link p-0">CoinFlip Financial Privacy Notice</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link p-0">CoinFlip Terms of Service</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link p-0">CoinFlip Trade Desk Terms of Service</Link></li>
              </ul>
            </div>


          </div>
        </div>


      </footer>
    </>
  )
}

export default Footer