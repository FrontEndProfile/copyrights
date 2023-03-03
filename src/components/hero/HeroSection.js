import React from 'react'
import '../../index.css'

import Lines from '../../assets/images/circles.png'
import heroImage from '../../assets/images/hero-img.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <>
            <section className='HeroComponent'>
                <div className='heroLines'>
                    <img className='img-fluid mw-100' src={Lines} alt=''/>
                </div>

                <div className='container position-relative'>
                    <div className='heroImg'>
                        <img className='img-fluid mw-100' src={heroImage} alt=''/>
                    </div>
                    <div className='row HeroContent'>
                        <div className='col-md-12'>
                            <h1 className='HeroHead'>
                                The Ultimate Copyright Protection <br />
                                Tool <span>Copyright Wallet</span>
                            </h1>
                            <p className='Herotext'>
                                Welcome to Copyright Wallet, your trusted partner in copyright protection. We understand that as a creator, your intellectual property is incredibly valuable, and it's important to ensure that it remains safe and secure. That's where Copyright Wallet comes in.
                            </p>
                            <Link to='/profile' className='ui_btn text-decoration-none'>Get Started</Link>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default HeroSection