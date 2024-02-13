import React from 'react'
import logoImage from '../../images/logo-no-background.png'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div>
        <header className='nav-header'>
            <nav className='nav-nav'>
                <div className='logo-container'>
                    <img src={logoImage} width={75}/>
                </div>
                <div className='nav-links'>
                    <ul>
                        <Link  style={{ textDecoration: 'none' }} to="/features">Features</Link>
                        <Link   style={{ textDecoration: 'none' }} to="/github">Github</Link>
                        <Link  style={{ textDecoration: 'none' }} to="/login">Login</Link>
                        <Link  style={{ textDecoration: 'none' }} to="/SignUp">SignUp</Link>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}
