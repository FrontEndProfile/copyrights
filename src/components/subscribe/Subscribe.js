import React from 'react'
import arrow from '../../assets/images/arrow.png'
import { Link } from 'react-router-dom'


const Subscribe = () => {
    return (
        <>
            <div className='container-fluid subscribeMain'>
                {/* Subscribe  */}
                <div className='row subscribe'>
                    <div className='col'>
                        <h3>Receive transmissions</h3>
                        <p>Unsubscribe at any time. <Link to='/'>Privacy policy↗</Link></p>
                        <div className="footerForm mx-auto">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control bg-transparent" placeholder="Email address" />
                            <button className="btn p-0 m-0 footerFormBtn" type="button">
                                <img src={arrow} alt='' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe