import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/MainLogo.png'
import walletIcon from '../../assets/images/walletIcon.png'
import accountFrame from '../../assets/images/accountFrame.png'

import './header.css'
import '../../index.css'

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-xl">
                        <Link className="navbar-brand" to="/">
                            <img className='img-fluid' src={logo}  alt=''/>
                        </Link>
                        <button className="navbar-toggler border-0 border shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto align-items-center">
                                <li className="nav-item navBtn">
                                    <Link className="ui_btn text-decoration-none" to='/'>
                                        Connect Wallet
                                        <img className='WalletIcon' src={walletIcon} alt='' />
                                    </Link>
                                </li>
                                <li className="nav-item customDrop">
                                    <div className='dropdown'>
                                    <Link className="btn dropdown-toggle border border-0 shadow-none p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className='d-flex align-items-center text-start'>
                                            <img className='headAccountFrame' src={ accountFrame } alt=''/>
                                            <span>
                                                <div className='welcomeText'>Welcome Back!</div>
                                                <div className='userName'>Mudassir M</div>
                                            </span>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to='/'>Copyright Agreements</Link></li>
                                        <li><Link className="dropdown-item" to="/profile">Profiles</Link></li>
                                        <li><Link className="dropdown-item" to="/">Sign Out</Link></li>
                                    </ul>
                                    </div>
                                    <div>
                                    
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header