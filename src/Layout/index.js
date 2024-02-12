import React from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import whats from '../../src/assest/WhatsApp.svg.png'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col'>
            <Header />
            {children}
            <div className='fixed right-5 bottom-5'>
                <Link to='https://www.whatsapp.com/download'>
                    <img src={whats} alt="" className='h-20' />
                </Link>
            </div>
            <NavBar />
        </div>
    )
}

export default Layout