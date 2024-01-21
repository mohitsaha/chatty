import React from 'react'
import logoImage from '../../images/logo-no-background.png'
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
                        <li>Features</li>
                        <li>Contributers</li>
                        <li>Login</li>
                        <li>Signup</li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}
