import React from 'react'
import falloxo from '../assest/fillaxo-grey.png'
import search from '../assest/Search.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className='flex gap-3 items-center list-none justify-end cursor-pointer'>
                <li>Career</li>
                <li>Blog</li>
                <li>News & Events</li>
                <li>Contact</li>
                <Link to='https://www.facebook.com/fillaxo'>
                    <IconButton><FacebookIcon /></IconButton>
                </Link>
                <Link to='https://twitter.com/'>
                    <IconButton><TwitterIcon /></IconButton>
                </Link>
                <Link to='https://www.linkedin.com/company/fillaxo'>
                    <IconButton><LinkedInIcon /></IconButton>
                </Link>
                <Link to='https://www.instagram.com/fillaxo/'>
                    <IconButton><InstagramIcon /></IconButton>
                </Link>
            </div>
            <div className='flex justify-between pl-10 pr-20 items-center text-center '>
                <div>
                    <Link to='/'>
                        <img src={falloxo} alt="" className='h-32' />
                    </Link>
                </div>
                <div className='flex items-center gap-5 list-none text-red-600 text-xl'>
                    <Link to='/aboutus'>
                        <li>ABOUT US</li>
                    </Link>
                    <div className='cursor-pointer'>
                        <li className='relative inline-block'>SOLUTIONS</li>
                        {/* <div className='absolute border-2 bg-slate-300 p-5  hover:block z-10'>
                            <p>DAIRY</p>
                            <p>BEVERAGE</p>
                            <p>LIQUOR</p>
                        </div> */}
                    </div>
                    <Link to='/'>
                        <li>PRODUCTS</li>
                    </Link>
                    <Link to='/service'>
                        <li>SERVICES</li>
                    </Link>


                    <div className='flex items-center border h-10'>
                        <input type="search" placeholder='Search' className='p-1' />
                        <img src={search} alt="" className='h-7 border-collapse  cursor-pointer' />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header