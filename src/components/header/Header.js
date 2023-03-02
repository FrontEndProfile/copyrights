import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/MainLogo.png'
import walletIcon from '../../assets/images/walletIcon.png'

import './header.css'
import '../../index.css'

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img className='img-fluid' src={logo} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto align-items-center">
                                <li className="nav-item navBtn">
                                    <Link className="ui_btn text-decoration-none" to='/'>
                                        Connect Wallet
                                        <img className='WalletIcon' src={walletIcon} />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/profile">No Idea</Link>
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