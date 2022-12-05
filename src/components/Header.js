import React from 'react'
import Navbar from '../Navbar'

const Header = () => {
  return (
      <header>
      <section className='header'>
        <section className='header-top'></section>
      </section>
      <section>
        < Navbar />
      </section>
      <section>
        <section className='header-bottom'>
          <section className='header-bottom__phone'>
            5132523184
          </section>
          <section className='header-bottom__email'>
            choltz@cacbydesign.com
          </section>
        </section>
      </section>
    </header>
    
  )
}

export default Header
