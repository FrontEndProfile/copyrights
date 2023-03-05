import React from 'react'
import { Link } from 'react-router-dom'
import cardsCircles from '../../assets/images/cardsCircles.png'
import arrow from '../../assets/images/arrow.png'
import CardVector from '../../assets/images/CardVector.png'
import cardcash from '../../assets/images/cardcash.png'
import cardtrade from '../../assets/images/cardtrade.png'

const Cards = () => {
    return (
        <>
            <section className='CardsLayout' id='cards'>
                <div className='CardsLayoutLines'>
                    <img className='img-fluid' src={cardsCircles} alt='' />
                </div>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="card">
                                <img src={cardtrade} className="card-img-top cardOne" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Create</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
                                        Lorem ipsum dolor
                                    </p>
                                    <Link to="/" className="btn cardBtn">
                                        Get Started
                                        <img className="img-fluid arrowIcon" src={arrow} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="card">
                                <img src={CardVector} className="card-img-top cardTwo" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Login</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
                                        Lorem ipsum dolor
                                    </p>
                                    <Link to="/" className="btn cardBtn">
                                        Get Started
                                        <img className="img-fluid arrowIcon" src={arrow} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="card">
                                <img src={cardcash} className="card-img-top cardThree" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Wallet</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
                                        Lorem ipsum dolor
                                    </p>
                                    <Link to="/" className="btn cardBtn">
                                        Get Started
                                        <img className="img-fluid arrowIcon" src={arrow} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cards