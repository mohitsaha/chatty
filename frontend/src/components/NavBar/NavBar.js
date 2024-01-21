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
                        <li>features</li>
                        <li>contributers</li>
                        <li>login</li>
                        <li>signup</li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}
