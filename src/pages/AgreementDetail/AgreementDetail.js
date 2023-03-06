import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Lines from '../../assets/images/circles.png'

import '../profile/profile.css'
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
                      <div class="w-100">
                        <label for="name" class="form-label">Name</label>
                        <input type="email" class="form-control bg-transparent customInput" id="name" />
                      </div>
                      <div class="w-100">
                        <label for="name" class="form-label">Owner</label>
                        <select class="form-select bg-transparent w-100 pe-2 customInput" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="w-100">
                        <label for="name" class="form-label">Description</label>
                        <textarea className='form-control w-100 bg-transparent' rows={10}></textarea>
                      </div>
                      <button type="submit" class="fillBtn">Submit</button>
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